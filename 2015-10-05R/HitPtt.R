rm(list=ls(all.names=TRUE))
library(XML)
library(RCurl)
library(httr)

subPath = "https://www.ptt.cc/bbs/joke/index"
alltitle = data.frame();

for (i in 4175:4195)
{
  urlPath = paste(subPath,i,".html",sep="")
  temp = getURL(urlPath)
  xmlData = htmlParse(temp)
  title = xpathSApply(xmlData,"//div[@class=\"title\"]",xmlValue)
  subtitle = data.frame(title)
  alltitle = rbind(alltitle, subtitle)
}

