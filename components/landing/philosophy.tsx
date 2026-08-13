import { SectionLabel } from "./shared";
export function Philosophy() {
  return (
    <section className="philosophy-section section-wrap">
      <div className="philosophy-mark">“</div>
      <div>
        <SectionLabel>The learning philosophy</SectionLabel>
        <h2>
          AI should help you think,
          <br />
          <em>not think for you.</em>
        </h2>
        <p>
          ClerkMate is designed to support clinical learning — helping you
          prepare questions, recognize gaps, organize your history, and prepare
          for presentation while keeping clinical reasoning in the
          student&apos;s hands.
        </p>
      </div>
    </section>
  );
}
