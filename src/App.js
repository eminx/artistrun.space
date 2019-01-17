import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Text, Heading } from 'rebass';
import theme from './theme';
import { sections } from './text';

const bgStyle = {
  padding: 12,
  height: 320,
  backgroundSize: 'cover',
  borderRadius: 0
};

const mainColor = (alpha = 0.9) => `rgba(234, 50, 20, ${alpha})`;

const textGrey = (alpha = 0.8) => `rgba(0,0,0, ${alpha})`;

const Section = ({ title, imageUrl, children, order }) => (
  <Flex
    p={[3, 4, 5]}
    color={textGrey(0.7)}
    style={{ borderBottom: `1px solid ${mainColor(0.2)}` }}
  >
    <Box width={1}>
      <Heading p={12} fontSize={[4, 5]} color={textGrey(0.7)}>
        {title}
      </Heading>
      <Flex
        flexDirection={order % 2 === 0 ? 'row' : 'row-reverse'}
        flexWrap="wrap"
      >
        <Box p={[12, 24]} width={[1, 1 / 2]}>
          {imageUrl && (
            <Box
              style={{
                ...bgStyle,
                border: `1px solid ${mainColor(1)}`,
                backgroundImage: `url('${imageUrl}')`
              }}
              // p={[12, 24]}
              // width={[1, 2 / 5]}
            />
          )}
        </Box>
        <Box width={[1, 1 / 2]}>
          <Text
            fontSize={['16px', '20px']}
            color={textGrey()}
            p={[12, 24]}
            lineHeight={1.5}
            dangerouslySetInnerHTML={{ __html: children }}
          />
        </Box>
      </Flex>
    </Box>
  </Flex>
);

const ColorSpan = props => (
  <span style={{ color: mainColor() }}>{props.children}</span>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <div
            style={{ maxWidth: '1280px', margin: '0 auto', paddingBottom: 200 }}
          >
            <Flex p={[3, 4, 5]} flexWrap="wrap">
              <Box width={[1, 1 / 2, 1 / 2]}>
                <Heading
                  fontSize={[5, 6]}
                  fontWeight="bold"
                  color={mainColor()}
                >
                  nodal network
                </Heading>
                <Text fontSize={[2, 3]} lineHeight={1.1}>
                  digital tools for local engagement
                </Text>
                {/* <Box>
                  <iframe
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://app.mailjet.com/widget/iframe/3AD8/at1"
                    width="100%"
                    height="345"
                  />
                </Box> */}
              </Box>
              <Box width={[1, 1 / 2, 1 / 2]}>
                <Text lineHeight={1.5} fontSize={[2, 3]}>
                  <p>
                    Nodal is a web-based toolbox with a set of handy features
                    like <ColorSpan>calendar</ColorSpan>, used to cooperate a{' '}
                    <ColorSpan>shared set of resources</ColorSpan> like rooms,
                    machines, studios, stages etc.
                  </p>
                  <p>
                    It's typically used to facilitate
                    <ColorSpan> public or private activities</ColorSpan>{' '}
                    cooperated by a group of individuals like: artists,
                    crafts-persons, culture-creators, technicians or
                    participants, who value getting
                    <ColorSpan> together</ColorSpan>.
                  </p>
                </Text>
              </Box>
            </Flex>
            <div>
              {sections.map((section, index) => (
                <Section
                  key={section.title}
                  title={section.title}
                  imageUrl={section.imageUrl || null}
                  order={index}
                >
                  {section.description}
                </Section>
              ))}
            </div>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
