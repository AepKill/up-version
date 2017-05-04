# UP-VERSION

quick update you package version.



![effect image](https://raw.githubusercontent.com/AepKill/up-version/master/static/xxx.gif)



# Install

`npm install up-version -g`

# Use

`upv [--path package.json file path ] [--before ][--after]`

e.g:

```shell
E:\code > upv // update e:\code\package.json
E:\code > upv --path e:\abcd // update e:\abcd\package.json
```

# Hook

```json
{
  "name":"my-package",
  "scripts": {
    "before": "echo 'before upv'",
    "after": "echo 'after upv'"
  }
}
```

`upv --before before --after after`





