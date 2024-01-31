// ReadMoreComponent.js
import {useState} from 'react'
import {
  ReadMoreContainer,
  Heading,
  Description,
  Image,
  TextParagraph,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = ({reactHooksDescription, maxLength = 170}) => {
  const [isTruncated, setIsTruncated] = useState(true)

  const toggleTruncate = () => {
    setIsTruncated(prevState => !prevState)
  }

  const displayText = isTruncated
    ? reactHooksDescription.slice(0, maxLength)
    : reactHooksDescription

  return (
    <ReadMoreContainer>
      <Heading>React Hooks</Heading>
      <Description>Hooks are a new addition to React</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <TextParagraph>{displayText}</TextParagraph>
      {reactHooksDescription.length > maxLength && (
        <ReadMoreButton onClick={toggleTruncate}>
          {isTruncated ? 'Read More' : 'Read Less'}
        </ReadMoreButton>
      )}
    </ReadMoreContainer>
  )
}

export default ReadMore
