# Quick Start Guide

## Steps before cloning this repository

Before following these steps make sure you have Node version **_>=18.0.0 <=18.15.0_** and NPM version **_>=9.0.0 <=9.6.6_** installed in your local machine.

## Steps to clone this repository

1. Make sure you are logged in your organization git account. To login your git account please follow these commands

    ```sh
      git config --global user.name 'YOUR_USER_NAME'
      git config --global user.email 'YOUR_EMAIL'
    ```

2. Clone the repo
3. After the clone go to the project root directory.
4. Open the terminal and type this command to install all required dependencies for our applications

    ```sh
    yarn workspace:setup
    ```

5. After installation type this command in the terminal to run our project in development mode

```sh
yarn dev
```

## Commit guidelines

When you write a commit message please make sure your commit message looks like below:

```sh
<type>[scope]: <subject>

[body]

[footer(s) <optional>]
```

Please make sure at least you put type, scope, subject and body. Otherwise you cannot commit to the repository. It will through an error. Please be noted, you need to one line gap between two lines. And make sure there is no space between `type` and `scope` i.e. `feat(user)`, not `feat (user)`.

**_ref:_** [conventional Commit Message ✅](https://www.conventionalcommits.org/en/v1.0.0/)

```sh
feat(user): add login functionality

This commit adds the ability for users to log in to the application.

This commit also fixes a bug with the registration form. (Optional)

Fixes #123 (Optional)
```

The type is mandatory and determines the intent of the change. Here are possible values:

-   build: changes affecting build systems or external dependencies
-   ci: updating configuration files for continuous integration and deployment services
-   chore: updating grunt tasks etc.; no production code change
-   docs: documentation-only changes
-   feat: a new feature
-   fix: a bug fix
-   perf: a code change that improves performance
-   refactor: a code change that neither fixes a bug nor adds a feature
-   style: changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.)
-   test: adding missing tests or correcting existing tests
