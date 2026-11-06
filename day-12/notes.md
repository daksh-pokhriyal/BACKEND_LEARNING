# JWT - commonly used for authentication and authorization

# JWT- json web token
# website - JWTsecrets.com

# use package - jsonwebtoken
# paste JWT secret key in .env 

# create token using user data and jwt secret key
# use website json decode to find the data inside token

# what is JWT
1. user post api se create user send karega 
2. server userdata and jwt secret key se token banayega
3. and now server token user ko de dega 
4. now har ek user ki request me wo token bhi hoga 
5. we do this by cookies , cookies storage ka access server pe hota hai i.e. server cookies se kuch bhi read and write kr skta hai !
6. jab bhi token banega we set it in cookies , use package - cookie-parser



# Structure of JWT
A JWT consists of three parts separated by dots (.)
HEADER.PAYLOAD.SIGNATURE


For example, a JWT looks like:
xxxxx.yyyyy.zzzzz








# 1. Authentication

## What is Authentication?
-> request kis user ke paas se aayi hai ?

**Authentication = Who are you?**

It checks **user identity**.

Examples:

- Login with email & password
- Login with OTP
- Login with Google

### Real-life analogy

> Showing your **ID card** at the gate
> 

---

## Basic Authentication Flow

1. User signs up, all the data saved in database
2. Password is **hashed**
3. User logs in
4. Server verifies password
5. Server issues **JWT token**
6. ab user ke paas token hai
7. user ki har request ke sath token ki copy jayegi 

---

# 2. Authorization

## What is Authorization?

**Authorization = What are you allowed to do?**

It checks **permissions / roles**.

Examples:

- Only admin can delete users
- Only logged-in user can update their profile

### Real-life analogy

> You entered the building (auth)
> 
> 
> But only managers can enter the server room (authorization)
> 

---

# 3. Validation

## What is Validation?

**Validation = Is the data correct?**

It checks **input correctness** before saving.

Examples:

- Email format valid?
- Password length >= 6?
- Required fields present?

---

## Types of Validation

1. **Frontend validation**
2. **Backend validation**
3. **Database validation (Mongoose)**

---

## Example: Validation using Mongoose

```jsx
email: {
type:String,
required:true,
unique:true,
match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

```

---

## Example: Validation using Express

```jsx
if (!email || !password) {
return res.status(400).json({message:"All fields required" });
}

```

---

## Example: Validation using express-validator

```bash
npm install express-validator

```

```jsx
const { body, validationResult } =require("express-validator");

app.post("/register",
body("email").isEmail(),
body("password").isLength({min:6 }),
(req, res) => {
const errors =validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({errors: errors.array() });
    }
    res.send("Valid Data");
});

```

---

# 4. Verification

## What is Verification?

**Verification = Proving something is real or confirmed**

Usually happens **after authentication**

Examples:

- Email verification
- OTP verification
- Phone number verification

---

## Email Verification Flow

1. User registers
2. Server sends verification link
3. User clicks link
4. Account becomes verified

---

##
Displaying Authentication and authorization.md.





