import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom"
import ContentTypeCreator from './Components/ContentTypeCreator'
import ContentCreator from './Components/ContentCreator'
import ContentTypesList from './Components/ContentTypesList'
import ContentType from './Components/ContentType'
import ContentTypeDisplay from './Components/ContentTypeDisplay'
import { useSelector } from 'react-redux'

const TheRouter = () => {
  const selectContentType = state => state.contentTypes
  const { contentTypes } = useSelector(selectContentType)
  const selectContentTypeItem = state => state.contentTypeItems
  const { contentTypeItems } = useSelector(selectContentTypeItem)

  return (
    <Switch>
      {contentTypeItems.map(contentTypeItem =>
        <Route exact path={`/page/:pageId`}>
          <ContentTypeDisplay contentType={ 
            contentTypes.find(contentType => contentType.name === contentTypeItem.contentType) 
          } />
        </Route>
      )}
      <Route path="/templates/new">
        <ContentTypeCreator />
      </Route>
      <Route exact path="/templates">
        <ContentTypesList />
      </Route>
      <Route exact path="/templates/:templateId">
        <ContentType />
      </Route>
      <Route exact path="/page/new">
        <ContentCreator />
      </Route>
    </Switch>
  )
}
export default TheRouter;