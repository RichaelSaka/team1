from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
import json
from .. import filtering

# Create your views here.
def alljobs(request: HttpRequest):
    if request.method == "POST":
        user_role = "software"
        data = json.loads(request.body)
        user = data["username"]
        user_industries = data["industry"]
        predicate = filtering.get_predicate(user_industries, user_role)
        all_jobs = json.load("./jobs_data.json")
        filtered_jobs = list(filter(predicate, all_jobs))
        responseJSON = json.dumps(filtered_jobs)
        return HttpResponse(responseJSON)

def login(request: HttpRequest):
    pass