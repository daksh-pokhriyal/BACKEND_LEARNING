# in this we are creating login feature 

1. /api/auth/login route pe POST karenge , and if pass and email is correct we make a token and set it to cookies so that user can use it 

2. if email database me present nhi hai to return "user doesnt exist"

3. if user exist but password in database doesnt match with password from req.body then return "password doest matched"

4. after this to avoid database breach/leak we hash password , 
use website - MD5 hash generator 
    1. hasing gives same output for same input
    2. hashing is one way , hashed text plain text me convert nhi ho skta
        this is hashing not encryption , encryption is two way

5. use crypto.createHash('MD5') for hashing






app.use("/api/auth", authRouter) -> iska matlab /api/auth pe request krne pr authRouter wli api work karegi !