const BlogNavBar = () => {
  return (
    <nav>
      <div className="line"></div>
      <a href="/">
        <img id="home" src="../blog-log.png" alt="number1" />
        <span className="blog-log">&apos;s BLOG</span>
      </a>
      <ul>
        <li className="blog-show">
          <a className="blog-hover" href="/code">
            💬
            <p className="tooltiptext">Code Canvas</p>
          </a>
        </li>
        <li className="blog-show">
          <a className="blog-hover" href="/craft">
            💾
            <p className="tooltiptext">Byte Crafts</p>
          </a>
        </li>
        <li className="blog-show">
          <a className="blog-hover" href="/arin">
            🧚
            <p className="tooltiptext">For Arin</p>
          </a>
        </li>
        <li className="blog-show">
          <a className="blog-hover" href="https://integer-1.github.io/">
            🚀
            <p className="tooltiptext">Portfolio</p>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default BlogNavBar
