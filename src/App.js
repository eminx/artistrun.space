import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Text, Heading, Link } from 'rebass';
import theme from './theme';

const bgStyle = {
  padding: 12,
  height: 240,
  backgroundSize: 'cover',
  borderRadius: 0
};

const mainColor = (alpha = 0.9) => `rgba(234, 50, 20, ${alpha})`;

const textGrey = (alpha = 0.8) => `rgba(0,0,0, ${alpha})`;

const Section = ({ title, imageUrl, noImage, children }) => (
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
        {!noImage && (
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
          <Text fontSize={[2, 3]} color={textGrey()} p={12}>
            {children}
          </Text>
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
                    <ColorSpan>calendar</ColorSpan>, needed to operate a shared
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
              <Section
                title="Public Activities"
                imageUrl="https://images.unsplash.com/photo-1543060534-6461d31592ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              >
                You can create a public activity with an image, and extra
                details. Then people can RSVP on the same page easily. The host
                can also see the list of the participants and even perform a
                simple attendance check. <br />
                Either for already registered memberships, or those from
                outside, guest-list management can be covered with ease.
              </Section>

              <Section
                title="Bookings Calendar"
                imageUrl="https://s3.eu-central-1.amazonaws.com/skogen-reading-materials/landing-page/nodal-calendar.png"
              >
                When a resource is shared, such as that nice big printer, you as
                an individual want to be able to book it to work on your own
                private project, as well as see who have already booked it in
                your own community. <br />
                With nodal, you can see in the calendar for all of those shared
                resources and reclaim the empty spots.
              </Section>

              <Section
                title="Streams: Groups for any collaboration"
                imageUrl="https://s3.eu-central-1.amazonaws.com/skogen-reading-materials/landing-page/nodal-group.jpg"
              >
                When an individual sparks an idea that is yet to be articulated
                to become a more concrete activity, Streams feature comes in to
                the place. With Streams, one can initiate a co-creation and
                others who are also intrigued by the idea can join the
                conversation and eventually they can cocreate an event, an
                activity to take place.
              </Section>

              <Section
                title="Maintenance management"
                imageUrl="https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              >
                Members can create posts indicating a required task to be done
                regarding the facilities/machines/rooms that are shared. This
                way, keeping up the resources shared ready to use become easier
                to manage. Anyone can create a need, anyone can subscribe to do
                it and confirm being done.
              </Section>

              <Section
                title="Chats feature"
                imageUrl="https://s3.eu-central-1.amazonaws.com/skogen-reading-materials/landing-page/nodal-communication.png"
              >
                For any of the above mentioned features, users can chat specific
                to the topic (booking, study-group, public-activity or
                maintenance), on the same page they are, without having to leave
                the page...
              </Section>

              <Section
                title="Shared documents"
                imageUrl="https://images.unsplash.com/photo-1457694587812-e8bf29a43845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              >
                For all the documents specific to instances (study groups,
                public activities etc.), Nodal enables a common storage and easy
                access with upload/download features.
              </Section>

              <Section
                title="Memberships"
                imageUrl="https://s3.eu-central-1.amazonaws.com/skogen-reading-materials/landing-page/nodal-members.jpg"
              >
                With Nodal, you can manage the memberships within your
                organisation, either it is based on paid memberships, or just
                pure love.
              </Section>

              <Section title="Want to try?" noImage>
                <p>
                  We are currently working on making it easy for organisations
                  to adopt this.
                </p>
                <p>
                  Meanwhile, if you want to use Nodal software please get in
                  touch with us:{' '}
                  <Link href="mailto:emin@infinitesimals.space?subject=We're interested in Nodal">
                    Send an email
                  </Link>
                </p>
              </Section>
            </div>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
