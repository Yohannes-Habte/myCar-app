import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" px-5 py-3 bg-neutral-900 text-white">
      <section className="flex justify-between px-5 py-3 bg-neutral-900 text-white">
        <aside>
          <h3>Mapping</h3>
        </aside>

        <aside>
          <h3>Social Media</h3>
        </aside>

        <aside>
          <h3>contact</h3>
        </aside>
      </section>
      <p>Copyright</p>
    </footer>
  );
};

export default Footer;
