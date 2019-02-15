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
      <Heading
        p={12}
        fontSize={[4, 5]}
        color={textGrey(0.7)}
        textAlign="center"
      >
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
            />
          )}
        </Box>
        <Box width={imageUrl ? [1, 1 / 2] : 1}>
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
            <Flex flexWrap="wrap">
              <Box
                width={[1]}
                style={{ borderBottom: `1px solid ${mainColor()}` }}
              >
                <Text
                  fontSize={[3, 4]}
                  lineHeight={1.1}
                  textAlign="center"
                  pt={20}
                >
                  Collectively manage your
                </Text>
                <Heading
                  fontSize={[5, 6]}
                  fontWeight="bold"
                  color={mainColor()}
                  textAlign="center"
                >
                  Artistrun Space
                </Heading>
              </Box>
              <Box width={[1, 1 / 2]} px={[12, 24, 48]} pt={[20, 30, 50]}>
                <Text textAlign="center" fontSize={[3, 4]} lineHeight={1.5}>
                  <p>
                    We've figured out some ways to manage public and private
                    activities much better.
                  </p>
                  <p>Yet fun.</p>
                  <p>
                    <span style={{ borderBottom: `1px solid ${mainColor()}` }}>
                      Built by artists, for artists, for collaboration and
                      cooperation.
                    </span>
                  </p>
                </Text>
              </Box>

              <Box width={[1, 1 / 2]} p={[12, 24, 48]}>
                <Text lineHeight={1.5} fontSize={[3, 4]}>
                  <p>
                    <span style={{ backgroundColor: mainColor(0.1) }}>
                      Nodal is a web-based toolbox with a set of handy features
                      like <ColorSpan>calendar</ColorSpan>, used to cooperate a{' '}
                      <ColorSpan>shared set of resources</ColorSpan> like rooms,
                      machines, studios, stages etc.
                    </span>
                  </p>
                  <p>
                    <span style={{ backgroundColor: mainColor(0.1) }}>
                      It's typically used to facilitate
                      <ColorSpan> public or private activities</ColorSpan>{' '}
                      cooperated by a group of individuals like: artists,
                      crafts-persons, culture-creators, technicians or
                      participants, who value getting
                      <ColorSpan> together</ColorSpan>.
                    </span>
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
