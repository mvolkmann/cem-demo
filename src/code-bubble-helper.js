import { CodeBubble } from "code-bubble";
const options = {};
new CodeBubble(options);

const html = String.raw;

export function setCode(example) {
  const cb = document.querySelector("code-bubble");
  cb.innerHTML = html`
    <code class="language-html">
      <pre>${example.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</pre>
    </code>
  `;
}
