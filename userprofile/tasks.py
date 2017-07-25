#The tasks goes here
from __future__ import absolute_import, unicode_literals
from celery import shared_task
import requests
import urlparse
import json

#sync with TolaWork
@shared_task
def sync_create_with_tolawork(data, url){

    server_name = "tola.work"
    tola_work_url = urlparse.urljoin(url, server_name)

    token = ''
    header = {'Authorization': 'token %s' % token}

    api_response = requests.post(tola_work_url,json.dumps(data),headers=header)

    if api_response.status_code == 200 || 201:
        return True,
    return false

}

@shared_task
def sync_update_with_tolawork(data, url){

    server_name = "tola.work"
    tola_work_url = urlparse.urljoin(url, server_name)

    token = ''
    header = {'Authorization': 'token %s' % token}

    api_response = requests.post(tola_work_url,json.dumps(data),headers=header)

    if api_response.status_code == 200 || 201:
        return True,
    return false

}

@shared_task
def sync_delete_with_tolawork(data, url){

    server_name = "tola.work"
    tola_work_url = urlparse.urljoin(url+"/", server_name)

    token = ''
    header = {'Authorization': 'token %s' % token}

    api_response = requests.delete(tola_work_url,json.dumps(data),headers=header)

    if api_response.status_code == 200 || 201:
        return True,
    return false

}

#sync with TolaActivity
@shared_task
def sync_create_with_activity(data, url){

    token = ''
    header = {'Authorization': 'token %s' % token}
    api_response = requests.post(url,json.dumps(data),headers=header)

    if api_response.status_code == 200 || 201:
        return True,
    return false
}

@shared_task
def sync_update_with_activity(data, url){

    token = ''
    header = {'Authorization': 'token %s' % token}
    api_response = requests.post(url,json.dumps(data),headers=header)

    if api_response.status_code == 200 || 201:
        return True,
    return false
}

@shared_task
def sync_delete_with_activity(data, url){

    token = ''
    header = {'Authorization': 'token %s' % token}
    api_response = requests.delete(url,json.dumps(data),headers=header)

    if api_response.status_code == 200 || 201:
        return True,
    return false
}

#sync with TolaTables
@shared_task
def sync_create_with_table(data, url){
    token = ''
    header = {'Authorization': 'token %s' % token}
    api_response = requests.post(url,json.dumps(data),headers=header)

    if api_response.status_code == 200 || 201:
        return True,
    return false
}

@shared_task
def sync_delete_with_table(data, url){
    token = ''
    header = {'Authorization': 'token %s' % token}
    api_response = requests.delete(url,json.dumps(data),headers=header)

    if api_response.status_code == 200 || 201:
        return True,
    return false
}
