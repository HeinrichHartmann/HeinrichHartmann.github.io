c = get_config()
c.NbConvertApp.notebooks = ['*.ipynb']
c.Exporter.preprocessors = ['jekyll_preprocessor.JekyllPreprocessor']
c.NbConvertApp.export_format = 'markdown'
c.Exporter.template_file = 'jekyll'
