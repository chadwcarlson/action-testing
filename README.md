# Auto update action testing

## TODO

Inital:

- *Keep this thread in mind: https://platformsh.slack.com/archives/C77CKJMJ9/p1614622037063900*

- [x] a better test that doesn't depend on an update occuring
- [ ] Make everything depend on passing tests
- [ ] Make test multi-env (https://github.com/platformsh/config-reader-nodejs/blob/master/.github/workflows/quality-assurance.yaml)
- [x] handling for when there are no updates (randomly no updates) - ONLY UPDATE ON ODD DAYS
- [ ] re-add `working/branch.yaml` cron
- [ ] setup auto-merging, requires config change and auto approval.
- [ ] move all these changes to a `data-updates` flow, rather than `auto-updates`
- [ ] run npm update on this repo using this model
- [ ] Use `data.yaml` as a data source for a Gatsby site. 
- [ ] Subscribe to upstream Gatsby updates, use those events to trigger a new rebuild of source.
- [ ] Run tests on the deployed P.sh evironment. Should probably be json instead of yaml so we can curl
- [ ] How much of this (if any) changes for Private repos?
- [ ] Merging
    - data: test + auto
    - deps: test + auto
    - triggered core: test + notify
- [ ] tagging/releases

Then:

- tagging/releasing auto-updates

Test on & compare with S.O.s:

- video index
- search indices
- template updates


## Summary

- `branch.yaml`: Every "X X X X X", create the new branch `auto-updates` from `master`.
- `commit.yaml`: On `create` for the branch `auto-updates`, run the update script `test.js`, which may or may not result in new commits.
- `new-pull-request.yaml`: If there are new commits on `auto-updates`, open a new PR.
- `test-merge.yaml`: Test and if passed on new PR, merge. 

## Configuration

### Secrets

* `GHTOKEN`: GitHub access token.
* `UPDATE_BRANCH`: The branch used across actions where auto-updates are performed.

### Options

* `Allow auto-merge`: enabled
* `Automatically delete head branches`: enabled

## Resources

* [GH Action Docs](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#create)
* [Creating branches: `action-create-branch`](https://github.com/peterjgrainger/action-create-branch)
* [Creating commits from action artifacts: `git-auto-commit`](https://github.com/marketplace/actions/git-auto-commit)
* [Create PRs from branches: `create-pull-request`](https://github.com/marketplace/actions/create-pull-request)
* [Test and auto merge: `auto-merge-pull-request`](https://github.com/marketplace/actions/auto-merge-pull-request)

description: Each day a series of GitHub actions are run to update the data attribute of this file. A scheduled action creates a new branch, and actions connected to that event commit a new line, create a PR for the change, run a test, and then automatically merge the update. The data added is just a string of the current date and time using the moment module.
useCases:
    videos: "Listing all YouTube videos on Marketing site, getting around the YT query cap by doing once per day."
    templates: "Create a daily index for internal + external templates that can be displayed via Hugo in docs and on Marketing site. Collab with A. Hobday to make sure we get all of the data we need here."
    search: "Doc's builds are long, specifically because it's scraping all other sites. Put into something like this, run once a day, curl on builds"



## Observations

- An auto-created PR (an action) cannot trigger tests configured for pull-requests (another action) (https://github.com/peter-evans/create-pull-request/issues/48)