#The tasks goes here
from __future__ import absolute_import, unicode_literals
from celery import shared_task
import requests
import urlparse

#sync data between TolaProfile and other TolaTools
@shared_task
def sync_with_tolawork(data, url){
    #construt TolaWork url
    server_name = "tola.work"
    tola_work_url = urlparse.urljoin(url, server_name)

    token = ''
    header = {'Authorization': 'token %s' % token}

    api_response = requests.post(tola_work_url,json.dumps(data),headers=header)

}

@shared_task
def sync_with_activity(data, url){

    token = ''
    header = {'Authorization': 'token %s' % token}
    api_response = requests.post(url,json.dumps(data),headers=header)

}

@shared_task
def sync_with_table(data, url){
    token = ''
    header = {'Authorization': 'token %s' % token}
    api_response = requests.post(url,json.dumps(data),headers=header)

}
