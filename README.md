# www.missionbit.org

This is the source for www.missionbit.org
(also available at www.missionbit.com)!

We use [Jekyll] to help us generate www.missionbit.org because that's
what [GitHub Pages] uses. This lets us build a site with a lot of
pages without having to repeat so much over and over.

We use the following JavaScript, CSS, and font libraries to make the
site work well and look good:

* [jQuery]
* [Bootstrap]
* [Font Awesome]

## Setup

The most straightforward way is to install [Docker Desktop],
which takes care of managing the software required to build the site.

## HACKING

Open a Terminal and change to the directory where you've checked out
`missionbit.github.io`, then run this command to start the [Jekyll]
preview server:

```bash
docker-compose up
```

This will run a webserver on your computer at
[http://127.0.0.1:4000/](http://127.0.0.1:4000/)
and automatically rebuild the site when you make changes to the files.
You will have to reload the pages in your browser to see the changes.

You can stop the server by pressing Ctrl-C.

## Using the page template

To make a page on the site use the template, they need to have
what's called [YAML Front Matter]. A very small example page would
look like this:

`minimal-page-example.html`

```html
---
title: "Minimal Page Example"
---
<!-- The above block between two lines of three hypens is the YAML front matter! -->
<div class="homepage-image img-anim-group-1">
    <!-- This is the big image -->
</div>

<!-- container -->
<div class="container" role="main">
    <div class="page-head">
        <!-- This is the blue section on top of the big image -->
        <span>Free Coding Classes for Public School Students</span>
    </div>

    <div class="section">
        <!-- Here's the main content of the page -->
        <div class="headline"><h2>This is a headline</h2></div>
        <p>Here's some content</p>
    </div>
</div>
```

## Azure Deployment

The site is automatically built with [Azure Pipelines].

On a successful build of the master branch, the DeployMasterCDN
pipeline job publishes the build artifacts to Azure Blob Storage and then
modifies the CDN configuration to use this path as the new website.

Note that since the same blob store is used for all front-ends,
changes to the 404.html page only occur after merging to master.

[Azure Pipelines]: https://dev.azure.com/missionbit/www.missionbit.com/
[Docker Desktop]: https://www.docker.com/products/docker-desktop
[Jekyll]: http://jekyllrb.com/
[GitHub Pages]: https://pages.github.com/
[jQuery]: http://jquery.com/
[Bootstrap]: http://getbootstrap.com/
[Font Awesome]: http://fontawesome.io/
[YAML Front Matter]: http://jekyllrb.com/docs/frontmatter/
