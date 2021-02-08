# action-testing
Action testing


https://github.com/marketplace/actions/git-auto-commit
https://github.com/peterjgrainger/action-create-branch


- `scheduled-branch.yaml`: Every "X X X X X", create the new branch `auto-updates` from `master`.
- `commit-updates.yaml`: On `create` for the branch `auto-updates`, run the update script `test.js`, which may or may not result in new commits.
- `new-pull-request.yaml`: If there are new commits on `auto-updates`, open a new PR.
- `auto-merge.yaml`: Test and if passed on new PR, merge. 
