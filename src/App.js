import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Text, Heading, Link } from 'rebass';
import theme from './theme';
import sections from './sections';

const bgStyle = {
  padding: 12,
  height: 240,
  backgroundSize: 'cover',
  borderRadius: 0
};

const mainColor = (alpha = 0.9) => `rgba(234, 50, 20, ${alpha})`;

const textGrey = (alpha = 0.8) => `rgba(0,0,0, ${alpha})`;

const Section = ({ title, imageUrl, children }) => (
  <Flex
    p={[3, 4, 5]}
    bg="snow"
    color={textGrey(0.7)}
    style={{ borderBottom: `1px solid ${mainColor(0.2)}` }}
  >
    <Box width={1}>
      <Heading p={12} fontSize={[3, 4]} color={textGrey(0.7)}>
        {title}
      </Heading>
      <Flex flexDirection="row-reverse" flexWrap="wrap">
        {imageUrl && (
          <Box
            style={{
              ...bgStyle,
              border: `1px solid ${mainColor(1)}`,
              backgroundImage: `url('${imageUrl}')`
            }}
            width={[1, 2 / 5]}
          />
        )}
        <Box width={[1, 3 / 5]}>
          <Text
            fontSize={[2, 3]}
            color={textGrey()}
            p={12}
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
      <div
        className="App"
        style={{
          backgroundColor: '#fff0f0'
        }}
      >
        <ThemeProvider theme={theme}>
          <div
            style={{ maxWidth: '960px', margin: '0 auto', paddingBottom: 200 }}
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
              </Box>
              <Box width={[1, 1 / 2, 1 / 2]} color={textGrey}>
                <Text lineHeight={1.5} fontSize={[2, 3]}>
                  <p>
                    Nodal is a <ColorSpan>web software</ColorSpan> with a set of{' '}
                    <ColorSpan>handy features</ColorSpan> like{' '}
                    <ColorSpan>calendar</ColorSpan>, used to cooperate a shared
                    set of resources: like{' '}
                    <ColorSpan>rooms, machines, studios, stages</ColorSpan> etc.
                  </p>
                  <p>
                    It's typically used by a group of individuals like:{' '}
                    <ColorSpan>
                      artists, culture-creators, technicians or participants
                    </ColorSpan>{' '}
                    to facilitate
                    <ColorSpan> public or private activities</ColorSpan>, who
                    value getting
                    <ColorSpan> together</ColorSpan>.
                  </p>
                </Text>
              </Box>
            </Flex>
            <div style={{ border: `1px solid ${mainColor()}` }}>
              {sections.map(section => (
                <Section
                  title={section.title}
                  imageUrl={section.imageUrl || null}
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
