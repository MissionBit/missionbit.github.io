This is the source for www.missionbit.com!

We use [Jekyll] to help us generate www.missionbit.com because that's
what [GitHub Pages] uses. This lets us build a site with a lot of
pages without having to repeat so much over and over.

We use the following JavaScript, CSS, and font libraries to make the
site work well and look good:
* [jQuery]
* [Bootstrap]
* [Font Awesome]

# Setup

## Mac

Make sure you have an administrator account on the computer and
install [Jekyll] by opening Terminal and typing the following command:

```bash
sudo gem install jekyll
```

## Cloud9

After cloning the repository, you need to install [Jekyll]. It will take
a while! From the terminal:

```bash
bundle install
```

# HACKING

## Mac

Open a Terminal and change to the directory where you've checked out
`missionbit.github.io`, then run this command to start the [Jekyll]
preview server:

```bash
jekyll serve --watch --safe
```

This will run a webserver on your computer at http://127.0.0.1:4000/
and automatically rebuild the site when you make changes to the files.
You will have to reload the pages in your browser to see the changes.

## Cloud9

Open the terminal and run [Jekyll] like this:

```bash
bundle exec jekyll serve --watch --safe -P $PORT
```

Once you've done that, Cloud9 should let you know that your code is running.

# Using the page template

To make a page on the site use the template, they need to have
what's called [YAML Front Matter]. A very small example page would
look like this:

*minimal-page-example.html*
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

[Jekyll]: http://jekyllrb.com/
[GitHub Pages]: https://pages.github.com/
[jQuery]: http://jquery.com/
[Bootstrap]: http://getbootstrap.com/
[Font Awesome]: http://fontawesome.io/
[YAML Front Matter]: http://jekyllrb.com/docs/frontmatter/
