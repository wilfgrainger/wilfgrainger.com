# Lessons Learned

## 1. Documentation & Workflow Management
* **Lesson:** When following a strict workflow persona that mandates task tracking (like `tasks/todo.md`), ensure that *all* checklist items are checked off as they are completed. Leaving items unchecked gives the impression of incomplete work, even if the code was actually modified.
* **Action:** Before submitting or finishing any task, do a final review of `tasks/todo.md` to ensure its state perfectly reflects the state of the codebase and the actions taken. Write any required review summaries explicitly at the end of the document.

## 2. Dealing with Ghost Files / Assumptions
* **Lesson:** The plan assumed `test-toggle.js` existed and needed deletion based on a previous step, but the file was either already deleted or never existed in the repository state correctly. The failure to update the plan or check if the file existed caused confusion during the review phase.
* **Action:** Always verify the existence and state of a file (`ls`, `git status`) *before* adding it to a plan for deletion or modification, and if a file is gone, document its absence clearly in the task tracking file rather than leaving it as a pending "to-do".
