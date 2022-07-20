import React from 'react';

import {HtmlTemplateProps} from "./HtmlTemplate.types";

function HtmlTemplate({ html }: HtmlTemplateProps) {
  return (
    <div dangerouslySetInnerHtml={{ __html: html }}></div>
  )
}

export default HtmlTemplate
