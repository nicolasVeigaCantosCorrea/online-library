from flask import Flask, render_template
import os

template_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../frontend/templates")
app = Flask(__name__, template_folder=template_dir)

@app.route("/")
def home():
    return render_template("base.html")  # Renders templates/base.html

if __name__ == "__main__":
    app.run(debug=True)