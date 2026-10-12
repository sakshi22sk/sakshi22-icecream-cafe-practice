# Git & Merge Request Practical Exam — Scoop & Swirl Cafe

**Time:** 2 hours  
**Total:** 100 marks  
**Allowed:** Terminal, GitLab UI, training notes, `git help`  
**Project:** `sakshi22-icecream-cafe-practice`

## Rules

- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `revert:`.
- One logical change per commit.
- Never commit real secrets, logs, or `node_modules/`.
- Never force-push to `main`.
- When rewriting your own feature branch, use `--force-with-lease`.
- Work in order. Do not merge tasks that explicitly say not to merge.
- This is a training app. Checkout is simulated; it does not process real payments.

## Part 0 — Setup (5 marks, 5 minutes)

1. Clone your GitLab repository.
2. Configure your name and email locally for this repository.
3. Verify `git status`, `git branch -a`, `git remote -v`, and `git log --oneline -5`.

**Quick questions**
- What is the difference between `git clone` and `git pull`?
- What does `origin` usually refer to?
- How are `main` and `origin/main` different?

## Part 1 — Keep local files out of Git (12 marks, 12 minutes)

Create `chore/ignore-cafe-files` from `main`.

1. Stop tracking `config/settings.env`, `app.log`, and `node_modules/` while keeping local copies.
2. Update `.gitignore` to ignore those paths and future `*.env` and `*.log` files.
3. Verify with `git status` and `git check-ignore`.
4. Commit, push, open an MR into `main`, and merge it yourself.
5. In the MR description answer: Does removing a password-containing file from the latest commit make the old password safe? What else should the team do?

**Quick questions**
- Why does `.gitignore` not untrack an already tracked file?
- What does `git rm --cached` do?
- How can you test whether a file is ignored?
- What should happen to a credential that was committed?

## Part 2 — Revert a bad cafe change (10 marks, 10 minutes)

The commit `feat: add seasonal service fee` is on `main`.

1. Create `revert/seasonal-service-fee` from latest `main`.
2. Undo that commit using `git revert`, not history rewriting.
3. Use a conventional `revert:` message.
4. Push, open an MR, explain why revert is appropriate for a shared commit, and merge it.

**Quick questions**
- Does `git revert` create a new commit?
- What does `git reset` move?
- Why can resetting a shared branch disrupt teammates?

## Part 3 — Tags (5 marks, 5 minutes)

1. Update local `main`.
2. Create annotated tag `v1.0.1` with message `Release 1.0.1: clean cafe repository and remove service fee`.
3. Push the tag.
4. Delete the mistaken `release-test` tag locally and remotely.

**Quick questions**
- Annotated tag vs lightweight tag?
- How do you list tags?
- How do you push one tag?
- How do you delete a remote tag?

## Part 4 — Branch hygiene (8 marks, 8 minutes)

The branch `temp123` has a commit named `fix`.

1. Rename it to `docs/fix-cafe-menu-typo`.
2. Change its latest commit message to a proper Conventional Commit message.
3. Update the remote safely and remove the old remote branch.
4. Do not merge it.

**Quick questions**
- How do you rename a branch?
- What does `git commit --amend` change?
- What does `git push -u` do?
- Why delete the old remote branch after renaming?

## Part 5 — Reset and interactive rebase (12 marks, 12 minutes)

The branch `feature/receipt` has four commits: `feat: add cafe receipt builder`, `wip`, `fix typo`, and `chore: add receipt debug output`.

1. Remove the last commit and its changes using `git reset`.
2. Interactively rebase the remaining three commits into one commit named `feat: add cafe receipt builder`.
3. Update the remote branch using `--force-with-lease`.
4. Do not merge it.

**Quick questions**
- Compare `--soft`, `--mixed`, and `--hard`.
- Which reset mode discards working-tree changes?
- What do `pick`, `reword`, and `squash` mean?
- Why use `--force-with-lease` rather than `--force`?

## Part 6 — Feature work, stash, and cherry-pick (20 marks, 24 minutes)

1. Update `main` and create `feat/cafe-tax`.
2. Fix `applyDiscount(amount, percent)` so 10 means 10%; commit as `fix: calculate percentage discount correctly`.
3. In a separate commit, make `calculateTotal` apply the discount first, add 18% tax using `TAX_RATE`, and round to two decimal places. Commit as `feat: calculate cafe total with tax`.
4. Start a `## Usage` section in `README.md`, but do not commit it.
5. Stash it with message `wip: usage docs`; copy the output of `git stash list`.
6. Create `fix/cafe-price-format` from latest `main`. Cherry-pick only the price-format fix from `experiment/cafe-payments`, not the unfinished payment code.
7. Push, open an MR, and merge the fix.
8. Return to `feat/cafe-tax`, restore the README work, finish the Usage section, and commit as `docs: explain cafe usage`.
9. Push and open an MR into `main`. Include What changed, Why, How to test, and the copied stash output. Assign the examiner as reviewer. Do not merge.

**Quick questions**
- `git stash` vs `git commit`?
- `git stash pop` vs `git stash apply`?
- Does cherry-pick copy an entire branch?
- How can you inspect files changed by a commit?
- Why separate the bug fix and feature into different commits?

## Part 7 — Rebase and conflict resolution (13 marks, 15 minutes)

1. Merge the approved MR from `hotfix/cafe-rounding` in GitLab.
2. Rebase `feat/cafe-tax` onto latest `main`.
3. Resolve conflicts locally, preserving both rounding and discount-plus-tax behavior.
4. Ensure no conflict markers remain and `node check.js` reports `ALL CHECKS PASSED`.
5. Push using `--force-with-lease`.
6. Comment on the MR explaining the resolution.

**Quick questions**
- What do `<<<<<<<`, `=======`, and `>>>>>>>` mean?
- Merge vs rebase?
- What does `git rebase --continue` do?
- How can you cancel a conflicted rebase?

## Part 8 — Code review (10 marks, 12 minutes)

Review the MR `Cafe discount codes` from `feature/cafe-discounts`. Do not merge it.

1. Review the code and commit history.
2. Leave inline comments on specific problematic lines.
3. Use at least one GitLab suggestion.
4. Explain what is wrong, why it matters, and how to fix it.
5. Mention something good and submit the appropriate overall review decision.

**Quick questions**
- What makes an inline comment actionable?
- When should you use a suggestion?
- Comment vs request changes?
- Why review commits as well as the final diff?

## Part 9 — Respond to a review (5 marks, during the exam)

The examiner comments on your `feat/cafe-tax` MR.

1. Reply professionally.
2. Make the requested change as a new commit.
3. Push it and resolve the thread.

**Quick questions**
- Why usually add a new commit instead of rewriting a shared MR branch?
- Who should resolve a review thread under your team's process?

## Final verification

- [ ] `node check.js` prints `ALL CHECKS PASSED`.
- [ ] Commits use Conventional Commit messages.
- [ ] No real secrets, logs, or `node_modules/` are tracked.
- [ ] Required MRs are merged; branches marked “do not merge” remain unmerged.
- [ ] No branch was force-pushed to `main`.
- [ ] Required tags and remote branch names are correct.
- [ ] Review comments and threads are handled.

Tell the examiner when finished. Do not delete branches.
