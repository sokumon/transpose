import requests
import json

def get_request(base_url, api_version, endpoint):
    return f"{base_url}/{api_version}/{endpoint}"
def get_links():
    url = get_request("https://api.song.link","v1-alpha.1", "links")
    print(url)
    params = {"url":"https://open.spotify.com/track/4Q0qVhFQa7j6jRKzo3HDmP?si=09cd02f8babb49b6"}
    request = requests.get(url, params=params)
    data = json.loads(request.text)
    return data["linksByPlatform"]

print(get_links())