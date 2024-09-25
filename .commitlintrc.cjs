/** @type {import("cz-git").UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    alias: {
      b: 'chore(repo): :hammer: bump dependencies',
    },
    allowCustomIssuePrefix: false,
    allowEmptyIssuePrefix: false,
    maxSubjectLength: 100,
    scopeEnumSeparator: ',',
    skipQuestions: ['footer', 'scope'],
    useEmoji: true,
  },
  rules: {
    'subject-empty': [2, 'never'],
    'subject-min-length': [2, 'always', 2],
  },
};
