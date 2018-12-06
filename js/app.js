// $.ajax({
//     url: 'https://api.rss2json.com/v1/api.json',
//     method: 'GET',
//     dataType: 'json',
//     data: {
//         rss_url: 'https://news.ycombinator.com/rss',
//         api_key: '0000000000000000000000000000000000000000', // put your api key here
//         count: 2
//     }
// }).done(function (response) {
//     if (response.status != 'ok') { throw response.message; }

//     console.log('====== ' + response.feed.title + ' ======');

//     for (var i in response.items) {
//         var item = response.items[i];
//         console.log(item.title);

//     }
// });

// fetch('http://www.feedrapp.info?q=https://thenextweb.com/feed/').then((res) => {
//     alert(res);
//     res.text().then((xmlTxt) => {
//         var domParser = new DOMParser()
//         let doc = domParser.parseFromString(xmlTxt, 'text/xml')
//         doc.querySelectorAll('item').forEach((item) => {
//             let h1 = document.createElement('h1')
//             h1.textContent = item.querySelector('title').textContent
//             document.querySelector('#rss-feeds').appendChild(h1)
//         })
//     })
// });

// $.get('https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms', function (data) {
//     $(data).find("entry").each(function () { // or "item" or whatever suits your feed
//         var el = $(this);

//         console.log("------------------------");
//         console.log("title      : " + el.find("title").text());
//         console.log("author     : " + el.find("author").text());
//         console.log("description: " + el.find("description").text());
//     });
// });

// // // https://blog.feedspot.com/technology_rss_feeds/

// // News Aggregator:
// https://www.tldrnewsletter.com/rss
// https://www.techmeme.com/feed.xml





// https://www.techmeme.com/feed.xml
// https://www.engadget.com/rss.xml
// http://feeds.feedburner.com/TechCrunch
// https://www.technologyreview.com/topnews.rss
// http://feeds.arstechnica.com/arstechnica/technology-lab
// https://readwrite.com/feed/?x=1
// https://www.recode.net/rss/index.xml  
// https://www.computerworld.com/index.rss
// https://interestingengineering.com/feed
// http://feeds.feedburner.com/Makeuseof
// http://feeds.bbci.co.uk/news/technology/rss.xml
// http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml
// https://www.cnet.com/rss/news/
// http://feeds.washingtonpost.com/rss/business/technology
// https://www.huffingtonpost.com/section/technology/feed
// https://www.mirror.co.uk/tech/?service=rss
// https://www.cnet.com/rss/all/
// https://thenextweb.com/section/tech/feed/
// https://www.macworld.com/index.rss
// http://appleinsider.com/rss/news/
// https://www.pcworld.com/index.rss
// https://www.reddit.com/r/technology/.rss

// // News Source: Top 10 
// https://techcrunch.com/feed/
// https://thenextweb.com/feed/
// https://www.wired.com/feed/rss
// https://www.firstpost.com/rss/tech.xml
// https://www.theverge.com/rss/frontpage
// https://mashable.com/rss/
// http://feeds.macrumors.com/MacRumors-All
// https://www.smashingmagazine.com/feed
// https://www.digitaltrends.com/cool-tech/feed/
var feedval = '';

jQuery(function ($) {

    // $("#rss-feeds").rss("https://thenextweb.com/feed/")
    $('#rss-feeds').rss("https://techcrunch.com/feed/", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} TC: 
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`
    });

    $('#rss-feeds').rss("https://thenextweb.com/feed/", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} TNW: <br/>
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`
    });

    $('#rss-feeds').rss("https://www.wired.com/feed/rss", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} WIRED: <br/>
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`
    });

    $('#rss-feeds').rss("https://www.firstpost.com/rss/tech.xml", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} TECH2: <br/>
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`
    });

    $('#rss-feeds').rss("https://www.theverge.com/rss/frontpage", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} Verge: <br/>
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`
    });

    $('#rss-feeds').rss("https://mashable.com/rss/", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} Mashable: <br/>
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`
    });

    $('#rss-feeds').rss("http://feeds.macrumors.com/MacRumors-All", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} MacRumors: <br/>
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`
    });

    $('#rss-feeds').rss("https://www.smashingmagazine.com/feed", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} Smazing Mag: <br/>
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`
    });

    $('#rss-feeds').rss("https://www.digitaltrends.com/cool-tech/feed/", {
        layoutTemplate: "<table><tr><th>Title</th></tr>{entries}</table>",
        entryTemplate: `<tr><td>
                        {teaserImage} Digital Trends: <br/>
                        <a href="{url}" target="_blank">{title}</a> <br/>
                        {shortBodyPlain} <br/>
                        {author} - {date} <br/><br/>
                        <hr/>
                        </td></tr>`,
        
    });

});

function displayfeed() {
    alert(feedval);
}