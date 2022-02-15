import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {  


    

    return (

        <main role="main">
            <div className="row">
                <div className="col-md-8 blog-main">
                <h3 className="pb-4 mb-4 font-italic border-bottom">
                    From the Firehose
                </h3>

                <div className="blog-post">
                    <h2 className="blog-post-title">Sample blog post</h2>
                    <p className="blog-post-meta">January 1, 2014 by <Link to="#">Mark</Link></p>

                    <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                    <hr />
                    <p>Cum sociis natoque penatibus et magnis <Link to="/">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                    <blockquote>
                    <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </blockquote>
                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    <h2>Heading</h2>
                    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <h3>Sub-heading</h3>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <pre><code>Example code block</code></pre>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                    <h3>Sub-heading</h3>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <ul>
                    <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                    <li>Donec id elit non mi porta gravida at eget metus.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                    </ul>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                    <ol>
                    <li>Vestibulum id ligula porta felis euismod semper.</li>
                    <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                    <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                    </ol>
                    <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                </div>

                <div className="blog-post">
                    <h2 className="blog-post-title">Another blog post</h2>
                    <p className="blog-post-meta">December 23, 2013 by <Link to="/">Jacob</Link></p>

                    <p>Cum sociis natoque penatibus et magnis <Link to="/">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                    <blockquote>
                    <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </blockquote>
                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                </div>

                <div className="blog-post">
                    <h2 className="blog-post-title">New feature</h2>
                    <p className="blog-post-meta">December 14, 2013 by <Link to="/">Chris</Link></p>

                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <ul>
                    <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                    <li>Donec id elit non mi porta gravida at eget metus.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                    </ul>
                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                </div>

                <nav className="blog-pagination">
                    <Link className="btn btn-outline-primary" to="/">Older</Link>
                    <Link className="btn btn-outline-secondary disabled" to="/" tabindex="-1" aria-disabled="true">Newer</Link>
                </nav>

                </div>

                <aside className="col-md-4 blog-sidebar">
                <div className="p-4 mb-3 bg-light rounded">
                    <h4 className="font-italic">About</h4>
                    <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                </div>

                <div className="p-4">
                    <h4 className="font-italic">Archives</h4>
                    <ol className="list-unstyled mb-0">
                    <li><Link to="/">March 2014</Link></li>
                    <li><Link to="/">February 2014</Link></li>
                    <li><Link to="/">January 2014</Link></li>
                    <li><Link to="/">December 2013</Link></li>
                    <li><Link to="/">November 2013</Link></li>
                    <li><Link to="/">October 2013</Link></li>
                    <li><Link to="/">September 2013</Link></li>
                    <li><Link to="/">August 2013</Link></li>
                    <li><Link to="/">July 2013</Link></li>
                    <li><Link to="/">June 2013</Link></li>
                    <li><Link to="/">May 2013</Link></li>
                    <li><Link to="/">April 2013</Link></li>
                    </ol>
                </div>

                <div className="p-4">
                    <h4 className="font-italic">Elsewhere</h4>
                    <ol className="list-unstyled">
                    <li><Link to="/">GitHub</Link></li>
                    <li><Link to="/">Twitter</Link></li>
                    <li><Link to="/">Facebook</Link></li>
                    </ol>
                </div>
                </aside>

            </div>
        </main>        
      
    );
  
}

