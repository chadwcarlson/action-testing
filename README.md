# Auto update action testing

## Summary

- `scheduled-branch.yaml`: Every "X X X X X", create the new branch `auto-updates` from `master`.
- `commit-updates.yaml`: On `create` for the branch `auto-updates`, run the update script `test.js`, which may or may not result in new commits.
- `new-pull-request.yaml`: If there are new commits on `auto-updates`, open a new PR.
- `test-merge.yaml`: Test and if passed on new PR, merge. 

## Resources

* [GH Action Docs](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#create)
* [Creating branches: `action-create-branch`](https://github.com/peterjgrainger/action-create-branch)
* [Creating commits from action artifacts: `git-auto-commit`](https://github.com/marketplace/actions/git-auto-commit)
* [Create PRs from branches: `create-pull-request`](https://github.com/marketplace/actions/create-pull-request)
* [Test and auto merge: `auto-merge-pull-request`](https://github.com/marketplace/actions/auto-merge-pull-request)
