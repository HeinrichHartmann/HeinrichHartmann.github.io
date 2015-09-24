<style> .center { margin-right: auto; margin-left:auto; display: block; max-width:600px } </style>
    
<!--# Using the Google Spreadsheets Python API -->

In this note we will receive and send rows to a Google Spreadsheet.

[Google Spreadsheets](https://www.google.com/sheets/about/) is a great
tool to store all kinds of tables e.g. for expenses or contacts, in a
human readable, editable and globally accessible form.  With the
[Google Drive API](https://developers.google.com/drive/web/about-sdk)
it is possible to automate access to Google Spreadsheets and use these
worksheets as little databases that can be modified from the command
line.

The API is even more powerfull and supports applications to access
data from third party users (e.g. for a image manipulation tool). This
power brings a lot of complexity, in particular to the
authentification process, that makes the documentation hard to
understand. This note walks you through a simple data access example,
while avoiding a lot of this complexity.

##Step 1: Install gdata Library

We will be using the [gdata-python-client](https://github.com/google/gdata-python-client/).
You can either install it from source or using a package manager, e.g. using

    $ pip install gdata

## Step 2: Get an application specific password

We will need to access your Google Drive data but do not require to
access data from third parties.  Therefore we don't need 
[OAuth2](https://developers.google.com/identity/protocols/OAuth2)
but can use application specific passwords:

1. Generate a password at <https://security.google.com/settings/security/apppasswords>

2. Store it an a json file (do not check it into version control) e.g. using

       $ cat <<EOF > GoogleAppPw.json
       {
          "email" : "<put your email here>",
          "password" : "<put generated password here>"
       }
       EOF

We can read the password from a python script as follows:

{% highlight python %}
import json
with open("GoogleAppPw.json") as fh:
    config = json.load(fh)

# Print the password on the screen
print config['password']
{% endhighlight %}

## Step 3: Access Google Sheets API

{% highlight python %}
import gdata.spreadsheet.service

# Create connection object
client = gdata.spreadsheet.service.SpreadsheetsService()

# Login using credentials
client.ClientLogin(config['email'], config['password'])
{% endhighlight %}

If the last command did not raise an error, you have successfully connected to the Google API.
Let's print all available spreadsheets:

{% highlight python %}
# List all spreadsheets
documents_feed = client.GetSpreadsheetsFeed()
for document_entry in documents_feed.entry:
    print document_entry.title.text
{% endhighlight %}

    Expenses
    Untitled spreadsheet 1
    Untitled spreadsheet 2
    Untitled spreadsheet 3
    ...


## Step 4: Select the right Spreadsheet

First, we read the name of the spreadsheet and the worksheet we want to access into variables.
I have added them to the config file to leave the code more generic, feel free to use
string literals instead.

{% highlight python %}
spreadsheet_name = config['spreadsheet']
worksheet_name   = config['worksheet']
{% endhighlight %}

Now we iterate through the document feed and select the spreadsheet entry with matching title:

{% highlight python %}
for entry in documents_feed.entry:
    if entry.title.text == spreadsheet_name:
        spreadsheet_entry = entry
        break
else: # no-break
    print "Spreadsheet not found!"
{% endhighlight %}

Unfortunately, there is no easy way to obtain a spreadsheet object,
from the entry which we can query for cells. Instead, we have to
manually extract the key field from the id (this is no
joke. cf. [example](https://github.com/google/gdata-python-client/blob/master/samples/spreadsheets/spreadsheetExample.py#L52))
and pass it back to the client library:

{% highlight python %}
spreadsheet_key = spreadsheet_entry.id.text.split('/')[-1]
worksheet_feed  = client.GetWorksheetsFeed(spreadsheet_key)
{% endhighlight %}

Now we can iterate over the worksheets in a similar way:
{% highlight python %}
for entry in worksheet_feed.entry:
    if entry.title.text == worksheet_name:
        worksheet_entry = entry
        break
else: # no-break
    print "Worksheet not found!"

worksheet_key = worksheet_entry.id.text.split('/')[-1]
{% endhighlight %}

Now we have found the keys of the worksheet and spreadsheet.

## Step 5: List rows in the Worksheet

We retrieve the rows of a worksheet as iterator of dictionaries.  For
this to work, the spreadsheet has to comply to a format.  The first
row (header) defines the key of the dictionary the following rows
provide the subsequent values.

Here is an example:

    | date       | comment    | amount   | currency |
    | 2015-01-10 | Dinner     | 29.30    | EUR      |
    | 2015-01-10 | Taxi       | 12.00    | EUR      |

The worksheet can be accessed as follows:

{% highlight python %}
list_feed = client.GetListFeed(spreadsheet_key, worksheet_key)

# Iterator that lists all rows as
def rows():
    for entry in list_feed.entry:
        yield dict( (key, entry.custom[key].text) for key in entry.custom )
{% endhighlight %}

Now, we print out all rows in the sheet:

{% highlight python %}
print rows().next().keys() # col names
print "---"
for row in rows():
    print row.values() # row entries
{% endhighlight %}

    ['date', 'comment', 'amount', 'currency']
    ---
    ['2015-01-10', 'Dinner', '29.30', 'EUR']
    ['2015-01-10', 'Taxi', '12.00', 'EUR']

## Step 6: Append a row to the Worksheet

This is surprisingly straight forward.

{% highlight python %}
row = {'date':'2015-05-15', 'comment':'Bus', 'amount':'10', 'currency':'EUR'}

result = client.InsertRow(row, spreadsheet_key, worksheet_key)

if isinstance(result, gdata.spreadsheet.SpreadsheetsList): print "success"
{% endhighlight %}

    success

## Step7: Wrapping it up in a convenience class

For future use we wrap the above functions in a few classes. 
In the future I might add a few more methods to it. The current
version can be found on [GitHub](https://gist.github.com/HeinrichHartmann/fedc3fd54314ac4cec41).

<script src="https://gist.github.com/HeinrichHartmann/fedc3fd54314ac4cec41.js"></script>
