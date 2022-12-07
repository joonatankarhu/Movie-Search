# My comments

npm run start 
to start dev server

## Step 1

I begin this assignment by reading the requirements and instructions of the project thoroughly. Then I cloned the repo from GitHub and checked through the files in the project. Next step was to download the assets and checkout the API. Then I download all necessary dependencies. After that I push the "devel" branch to git to start working on my app.

## Step 2

    I look at the requirements and plan how to build the desired app and user interfaces. There are the following components in the design image that need to be made into components: 
    (I'll design them with this component tree)

    App.tsx (Wrapper)
        Header
            Logo
        Search
            Search container
                Search logo
                Search input
        Movies (3 components inside this)
            Title
            Movies array
                each movie
            SwitchMoviesBtn
                leftBtn
                section
                rightBtn
        Footer
            Title
            downloadLogos
                logos
            copyrightsParagraph
## Step 3
    I fetch the data from the API, and store it into a stateful array. I built the landing page UI into home component. Now I'm working on the movie hover effect.

## Step 4
    I work on the moves section/page. So that the website only displays 10 movies at a time. Working on the page switch buttons in SwitchPage component.
    step 4, I finished the switchPage btn UI's, now I'm making a additional "filter" state where I will store the filtered and searchable movies list.

## Step 5
    I finished the search logic. The movies container displays a movie, IF the search input value contains the same text as the movie title. I created the sort for the movies, the movies are sorted in the most recent release year, (descending) order.

## Step 6
    I build the footer, using the given design and ui components (logos).