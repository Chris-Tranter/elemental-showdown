# elemental-showdown Group Hackathon

## Github cheat sheet because we all have access to main

1. Clone the project:
   Open your terminal or command prompt.
   Navigate to the directory where you want to clone the project.
   Run the following command to clone the repository:
   `git clone <repository-url>`
   Replace <repository-url> with the URL of the project repository you want to clone.

2. Navigate to the project directory:
   After cloning, navigate into the cloned project directory using the cd command:
   `cd <project-directory>`
   Replace <project-directory> with the name of the cloned project directory.

3. Create a new branch:
   Before making any changes, create a new branch to work on. Run the following command:
   `git checkout -b <branch-name>`
   Replace <branch-name> with a descriptive name for your branch (e.g., feature-login, bug-fix-123).

4. Make changes and add them to the branch:
   Open the project in your preferred code editor.
   Make the necessary changes, additions, or modifications to the codebase.
   After making changes, stage the modified files using the git add command:
   `git add <file1> <file2> ...`
   Replace <file1>, <file2>, etc., with the specific files you want to stage, or use git add . to stage all modified files.
   however most developers just do `git add .` instead which adds all files to the branch.

5. Commit the changes:
   After staging the changes, commit them with a descriptive commit message using the git commit command:
   `git commit -m "Your commit message"`
   Replace "Your commit message" with a brief description of the changes you made.

6. Push the branch to the remote repository:
   Push the branch with your changes to the remote repository using the git push command:
   `git push origin <branch-name>`
   Replace <branch-name> with the name of the branch you created earlier.

7. Create a pull request:
   Open a web browser and navigate to the original repository on the platform where it is hosted (e.g., GitHub, GitLab).
   You should see a notification or a button to create a new pull request for your recently pushed branch.
   Click on the "Create Pull Request" button.
   Provide a title and description for your pull request, explaining the changes you made.
   Review the changes and make sure everything looks correct.
   Click on the "Create Pull Request" button to submit your pull request.

8. Collaborate and address feedback:
   After creating the pull request, the project maintainers or reviewers will review your changes.
   They may provide feedback, request modifications, or ask questions about your changes.
   Engage in the conversation, address any feedback or requested changes, and push additional commits to your branch if necessary.

9. Merge the pull request:
   Once your pull request is approved and all discussions are resolved, the project maintainers will merge your changes into the main branch of the repository.
   Congratulations! Your changes are now part of the project.
   `git pull origin main`

Remember to keep your local repository up to date by periodically pulling the latest changes from the main branch using `git pull origin main` before creating new branches and starting new work.
`N.B` remember to only create a pull request when we are in a group huddle.

# Color Palette

[!pallette]("./assets/elemental-showdown.png")

# Font Family

Exo2 is the custom font that we are using throughout the application as its a readable font and unique enough to display some originality.
