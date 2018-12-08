import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Text, Heading } from 'rebass';
import theme from './theme';

const Section = ({ title, children }) => (
  <Flex p={[3, 4, 5]} bg="snow" color="#ea3214" justifyContent="center">
    <Box>
      <Heading textAlign="center" p={2}>
        {title}
      </Heading>
      <Text fontSize={[1, 2, 3]} color="#383a34">
        {children}
      </Text>
    </Box>
  </Flex>
);

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: '#fff0f0' }}>
        <ThemeProvider theme={theme}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <Flex p={5} color="#ea3214" flexWrap="wrap">
              <Box width={[1, 1 / 2, 1 / 2]} css={{ minHeight: '80vh' }}>
                <Text fontSize={[4, 5, 6]}>nodal network</Text>
                <Text fontSize={2}>digital tools for local engagement</Text>
              </Box>
              <Box width={[1, 1 / 2, 1 / 2]} py={3} color="#ea3214">
                <Text lineHeight={1.5}>
                  Nodal is a set of tools that provide you with handy features
                  for managing resources that are shared. <br /> It will also
                  help you have your collaborations done easier and better.
                </Text>
              </Box>
            </Flex>
            <div>
              <Section title="Public Activities">
                Ability to manage registration for public activities that take
                place, either at the shared facility or somewhere else.
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
