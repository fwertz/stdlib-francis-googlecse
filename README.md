# francis/googlecse

Microservice for [Google Custom Search Engine](https://cse.google.com) [(Developer guide)](https://developers.google.com/custom-search)

### Arguments
- `args`
  - **Search query**
- `kwargs`
  - **`--cx`** The custom search engine ID.
  - **`--key`** Google API Key
  - _`[--num 10]`_ Number of search results to return (1 - 10, inclusive)
  - _`[--start 1]`_ The index of the first result to return
  - _`[--sites]`_ Comma separated list of domains to search
  - _`[--fields ]`_ items(cacheId,displayLink,formattedUrl,htmlFormattedUrl,htmlSnippet,htmlTitle,image,link,pagemap,title),promotions
  - _`[--gl us]`_ Geolocation of end user. Two character country code. 

### Example - Search specific retailers for a product
```
f francis/googlecse "Cool Mist Humidifier type:product" --cx [cx] --key [key] --sites bedbathandbeyond.com,crane-usa.com
```
