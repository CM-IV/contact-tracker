const Footer = () => {
    return (
      <footer class="footer">
        <div class="columns is-centered">
                <div class="column is-half">
                        <div class="content has-text-centered">
                        <p>
                            <strong>
                                &copy; <em>Occident Tech Software</em>
                            </strong>
                        </p>
                        <a href="https://github.com/CM-IV">
                            <span class="icon">
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </span>
                        </a>
                        <a href="https://landing.civdev.xyz">
                            <span class="icon">
                                <i class="fa fa-globe-w" aria-hidden="true"></i>
                            </span>
                        </a>
                        </div>
                </div>
            <div class="column is-half">
                <div class="content has-text-centered">
                    <a href="/">Home</a>
                </div>
            </div>
        </div>
      </footer>
    );
  };
  
  export { Footer };