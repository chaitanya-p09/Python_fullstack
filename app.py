from flask import Flask,render_template,jsonify,request

app=Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")
@app.route('/about')
def about():
    return render_template("about.html")
@app.route('/courses')
def course():
    return render_template("courses.html")
@app.route('/contact')
def contact():
    return render_template("contact.html")
@app.route('/register',methods=["POST","GET"])
def register():
    if request.method=="POST":
        name=request.form["name"]
        email=request.form["email"]
        password=request.form["password"]
        dob=request.form["dob"]
        gender=request.form["gender"]
        course=request.form["course"]
        return render_template("register.html")
@app.route('/login',methods=["POST","GET"])
def login():
    if request.method=="POST":
        return render_template("login,html")
    return render_template("login.html")
@app.route('api/register',methods=["POST"])
def api_register():
    data=request.get_json()
    email=dat.get("email")
    if email in users_db:
        retur jsonify({"status":"error","message":"user already exists with this email!"}),400
users_db[email]=data
return jsonify({"status":"success","message":"registration successful!"})      

    
def trainers():
    return render_template("trainers.html")

if __name__=='__main__':
    app.run(debug=True)
    @app.route('/api/login',methods=["POST"])
    def api_login():
        data=request.get_json()
        email=data.get("email")
        password=data.get("password")
        user=user_db.get(email)
        if user and user.get("password")==password:
            return jsonify({"status":"success","message":"login successful!welcome back."})
        