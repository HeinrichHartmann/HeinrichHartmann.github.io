OLD_BLOGS=\
  math/quantiles.html \
  blog/problem-lisp.html \
  blog/data-science.html \
  blog/Latency-SLOs.html \
  blog/more-toil-less-coil.html \
  blog/linux-monitoring-with-ebpf.html \
  blog/quality-time.html \
  VCB.html \
  blog/all-is-loss.html \
  blog/Circonus-on-RPI.html \
  blog/Monitoring-Dropbox.html \
  blog/2017/12/31/Quitting-Facebook.html \
  blog/Use-Dashboard.html \
  blog/2016/11/19/The-Electoral-College.html \
  "blog/2016/06/30/Percentiles-can't-be-aggregated.html" \
  blog/2016/06/12/Box-Counting-Arithmetic.html \
  "blog/2016/04/03/Dijkstra's-Prime-Number-Algorithm.html" \
  blog/2016/01/28/The-Emacs-Key-Bindings.html \
  blog/2016/01/15/Spike-Erosion.html \
  blog/2015/05/17/Using-the-Google-Drive-Spreadsheet-API.html \
  blog/2014/12/14/Sensor-Monitoring-with-RaspberryPi-and-Circonus.html \
  blog/Generative-Models-for-Time-Series.html \
  blog/A-categorical-perspective-on-Covariance.html \
  blog/2014/11/22/Raspberry-Pi-SunFounder-GPIO-Layout.html \
  blog/2014/11/16/Secure-Email-Communication.html \
  opinion/blog/2014/10/22/Privacy-Protection-for-Mobile-Sensor-Data.html \
  blog/2014/07/10/Anomaly-Detection.html \
  blog/2014/04/14/Digging-into-R.html \
  blog/2014/01/15/Distributed-scraper-design.html \
  blog/2014/01/01/Monitoring-with-Ganglia.html \
  blog/2013/12/25/Setting-up-a-Virtual-Cluster.html \
  blog/2013/01/17/Why-Openness-benefitts-research.html \
  blog/2012/09/10/Dissecting-Hello-World.html \
  opinion/2020/02/15/Thuringen.html \
  opinion/2015/03/01/Deutsche-Schuelerakademie.html

docker-hugo-build:
	docker run --rm -p 1313:1313 -v $$PWD:/srv/hugo yanqd0/hugo hugo

docker-hugo-server:
	docker run --rm -p 1313:1313 -v $$PWD:/srv/hugo yanqd0/hugo hugo server --bind 0.0.0.0

serve:
	hugo server -D

.PHONY: import
import:
	mkdir -p static/archive
	cd import/jekyll/_site/ && cp $(OLD_BLOGS) ../../../static/archive

publish:
	# make sure that master is up to date with origin/master before proceeding
	echo "ref: refs/heads/master" > .git/HEAD
	git reset
	git add ./public
	git commit -m "update"
	git subtree push --prefix public origin master
	echo "ref: refs/heads/hugo" > .git/HEAD
	git reset
