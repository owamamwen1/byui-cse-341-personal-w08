 const authLognElement = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSE341 APIs</title>
    <style>
        body {
            border: 0;
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background-color: rgba(250, 250, 250)
        }

        .container {
            min-height: 100vh;
            justify-content: center;
            align-items: center;
            display: flex;
            text-align: center;
        }

        .footer {
            position: relative;
            top: 30px;
        }

        p {
            padding: 20px;
        }

        a {
            cursor: pointer;
            border: 0;
            border-radius: 4px;
            font-weight: 800;
            margin: 0 10px;
            padding: 18px 80px;
            box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
            transition: 0.4s;
            text-decoration: none;
        }

        a:hover {
            color: white;
            box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
            background-color: rgba(104, 85, 224, 1);
        }
    </style>
</head>

<body>
    <div class="container">
        <div>
            <p>OAuth - Google Account</p>
            <a class="log" href="/auth/google">Log-in</a>
            <p class="footer">APIs by Owamamwen</p>
        </div>
    </div>
</body>

</html>
`;

module.exports = authLognElement;