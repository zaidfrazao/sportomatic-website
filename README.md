# Sportomatic.co.za Update
This project will serve as a newer, more comprehensive version of 
Sportmatic.co.za.

The purpose of this project is to practise newly acquired web development skills
in a way that could also benefit the business. 

This project will make Sportomatic.co.za more expansive, adding a blogging
platform, user accounts, and building the framework to allow for the web version
of the Sportomatic app to be incorporated.

## Coding Style Guide & Best Practices
Code should at all times adhere to specific coding style guides and best 
practices. This is for the sake of code maintainabiltiy long-run and ease of 
collaboration. Code will be regularly assessed (via linting) to ensure that 
these strict rules are maintained.

We will be using [Google's style guides] (https://github.com/google/styleguide)
as our conventions. 

## Git Commit Messages
### 7 Golden Rules
When commiting changes, one must adhere to the following [rules] 
(http://chris.beams.io/posts/git-commit/):

1. Separate subject from body with a blank line
2. Limit the subject line to roughly 50 characters
3. Capitalise the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line (i.e. as if giving a command)
6. Wrap the body at roughly 72 characters
7. Use the body to explan *what* and *why* vs. *how*

### Format of the commit message
```
<type>: <subject>

<body>

<footer>
```

### Message subject
Allowed `<type>` values:
- **feat** (new feature, not a new feature for build script)
- **fix** (bug fix for the user, not a fix to a build script)
- **docs** (changes to the documentation)
- **style** (formatting, missing semi colons, etc; no production code change)
- **refactor** (refactoring production code, eg. renaming code change)
- **test** (adding missing tests, refactoring tests; no production code change)
- **chore** (updating grunt tasks etc; no production code change)

### Message body
- uses the immperative, present tense: "change" not "changed" nor "changes"
- includes motivation for the change and contrasts with previous behaviour

### Message footer
#### Referencing issues
Closed issues should be listed on a separate line in the footer prefixed with
"Closes" keyword ike this:
```
Closes #234
```
or in the case of multiple issues
```
Closes #123, #245, #992
```
#### Breaking changes
All breaking changes have to be mentioned in the footer with the description of
the change, justification and migration notes.
```
BREAKING CHANGE:
`port-runner` command line option has been changed to `runner-port`, so that it
is consistent with the configuration file syntax.

To migrate your project, change all the commands, where you use `--port-runner`
to `--runner-port`.
```
