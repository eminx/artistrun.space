import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Text, Heading } from 'rebass';
import theme from './theme';

const bgStyle = {
  height: 200,
  backgroundSize: 'cover',
  borderRadius: 4
};

const Section = ({ title, children }) => (
  <Flex p={[3, 4, 5]} bg="snow" color="#ea3214">
    <Box width={1}>
      <Heading textAlign="center" p={2} fontSize={[4, 5]}>
        {title}
      </Heading>
      <Flex flexDirection="row-reverse" flexWrap="wrap">
        <Box
          style={{
            ...bgStyle,
            backgroundImage: "url('https://source.unsplash.com/random/400x200')"
          }}
          width={[1, 1 / 3]}
        />
        <Box width={[1, 2 / 3]}>
          <Text fontSize={[2, 3]} color="#383a34">
            {children}
          </Text>
        </Box>
      </Flex>
    </Box>
  </Flex>
);

const ColorSpan = props => (
  <span style={{ color: '#ea3214' }}>{props.children}</span>
);

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: '#fff0f0' }}>
        <ThemeProvider theme={theme}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <Flex p={[3, 4, 5]} color="#ea3214" flexWrap="wrap">
              <Box width={[1, 1 / 2, 1 / 2]} css={{ minHeight: '80vh' }}>
                <Heading fontSize={[5, 6]} fontWeight="bold">
                  nodal . network
                </Heading>
                <Text fontSize={[3, 4]}>
                  digital tools for local engagement
                </Text>
              </Box>
              <Box width={[1, 1 / 2, 1 / 2]} color="#383a34">
                <Text lineHeight={1.5} fontSize={[3, 4]}>
                  <p>
                    Nodal is a <ColorSpan>web app</ColorSpan> with a set of{' '}
                    <ColorSpan>handy features</ColorSpan> needed to operate a
                    shared set of resources: like{' '}
                    <ColorSpan>rooms, machines, studios, stages</ColorSpan> etc.
                  </p>
                  <p>
                    It's typically used by a group of individuals like:{' '}
                    <ColorSpan>
                      artists, culture-creators, technicians or participants
                    </ColorSpan>{' '}
                    to facilitate <ColorSpan>activities</ColorSpan>, who value
                    getting
                    <ColorSpan> together</ColorSpan>.
                  </p>
                </Text>
              </Box>
            </Flex>
            <div>
              <Section title="Public Activities">
                You can create a public activity with an image, and extra
                details. Then people can RSVP on the same page easily. The host
                can also see the list of the participants and even perform a
                simple attendance check.
              </Section>

              <Section title="Bookings Calendar">
                Ability to book the resources shared (room, machine, studio
                space etc.)
              </Section>

              <Section title="Shared documents">
                Uploading documents specific to instances (study groups, public
                activities etc.)
              </Section>

              <Section title="Streams: Groups for any collaboration">
                Ability to manage study groups as part of the network. This
                gives each dedicated member to manage their studies and invite
                other to take part in it.
              </Section>

              <Section title="Maintenance management">
                Members can create posts indicating a required task to be done
                regarding the facilities/machines/rooms that are shared. This
                way, keeping up the resources shared ready to use become easier
                to manage. Anyone can create a need, anyone can subscribe to do
                it and confirm being done.
              </Section>

              <Section title="Chats feature">
                For any of the above mentioned features, users can chat specific
                to the topic (booking, study-group, public-activity or
                maintenance), on the same page they are, without having to leave
                the page...
              </Section>

              <Section title="Memberships">
                With Nodal, you can manage the memberships within your
                organisation.
              </Section>
            </div>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
