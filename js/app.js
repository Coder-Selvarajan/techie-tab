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

fetch('https://crossorigin.me/http://rss.cnn.com/rss/edition_technology.rss').then((res) => {

    alert(res);
    res.text().then((xmlTxt) => {
        var domParser = new DOMParser()
        let doc = domParser.parseFromString(xmlTxt, 'text/xml')
        doc.querySelectorAll('item').forEach((item) => {
            let h1 = document.createElement('h1')
            h1.textContent = item.querySelector('title').textContent
            document.querySelector('output').appendChild(h1)
        })
    })
});

// $.get('https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms', function (data) {
//     $(data).find("entry").each(function () { // or "item" or whatever suits your feed
//         var el = $(this);

//         console.log("------------------------");
//         console.log("title      : " + el.find("title").text());
//         console.log("author     : " + el.find("author").text());
//         console.log("description: " + el.find("description").text());
//     });
// });



