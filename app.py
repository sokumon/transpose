from flask import Flask, render_template, redirect, url_for, request, session
# from datetime import timedelta
# for extending the number of days a user stays logged in

app = Flask(__name__)
app.secret_key= "hello"
# app.permanent_session_lifetime = timedelta(minutes=5)
# for extending the number of days a user stays logged in to five minutes total

@app.route('/')
def main_func():
    return "Hello World"


@app.route("/webhook", methods=["POST", "GET"])
def webhook():
    if request.method == "GET":
        print(request.args)
    else:
        print(request.json())

if __name__=="__main__":
    app.run(debug=True)