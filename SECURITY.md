# Security Policy

## Supported Versions

This security policy applies to all current and future versions of IdeaForge, unless otherwise specified. If a version is no longer supported, it will be clearly marked in this file and in release notes.

---

## Reporting a Vulnerability

If you discover a security vulnerability in IdeaForge, **please do not report it publicly**. Instead:

1. **Contact the Maintainers Privately:**
   - Open a [GitHub Security Advisory](https://github.com/Kiyoshiakira/ideaforge/security/advisories/new) (preferred).
   - Or email the maintainers at: [add your security contact email here].
   - Or, if neither is possible, open a private GitHub issue and mark it as security-related.

2. **Provide Details:**
   - Describe the vulnerability and the affected area(s) of the code or deployment.
   - Include steps to reproduce, if possible.
   - If you have a proposed fix, you may suggest it, but please do not submit a public pull request until contacted by maintainers.

3. **Responsible Disclosure:**
   - Please do not disclose the vulnerability publicly until we have had a reasonable chance to address it.
   - We will coordinate with you to disclose responsibly and give credit as appropriate.

---

## Commitment to Security

- We take the security and privacy of our users and contributors seriously.
- All reported vulnerabilities will be reviewed promptly and addressed as soon as possible.
- We will publish security advisories and release notes for all confirmed vulnerabilities that affect released versions.

---

## Security Best Practices for Contributors

- Do not commit secrets, API keys, or credentials to the repository.
- Sanitize and validate all user input, especially in collaborative and real-time features.
- Follow the principle of least privilege for permissions and roles.
- Use secure dependencies and keep them up to date. If you see an insecure dependency, please report or submit a fix.
- Review third-party code and libraries for security risks before integrating.

---

## Automated Security

- Dependabot alerts are enabled for automated dependency vulnerability detection.
- Code scanning and secret scanning are enabled to proactively identify risks.

---

## Questions?

For any concerns or questions regarding security, please contact the maintainers privately as outlined above.

Thank you for helping keep IdeaForge and our community safe!
