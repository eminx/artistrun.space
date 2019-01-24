const intro = `<p>
Artistrun.Space is a <ColorSpan>web software</ColorSpan> with a set of{' '}
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
</p>`;

const sections = [
  {
    title: 'Public Activities',
    imageUrl:
      'https://images.unsplash.com/photo-1543060534-6461d31592ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    description: `<p>Verified users can create a public activity with an image, and extra
  details. Then people can RSVP on the same page easily. The host
  can also see the list of the participants and even perform a
  simple attendance check. </p>
  <p>
  Either for already registered memberships, or those from
  outside, guest-list management can be covered with ease.</p>`
  },
  {
    title: 'Bookings Calendar',
    imageUrl:
      'https://s3.eu-central-1.amazonaws.com/skogen-reading-materials/landing-page/nodal-calendar.png',
    description: `<p>When a resource is shared, such as that nice big printer, you as
    an individual want to be able to book it to work on your own
    private project, as well as see who have already booked it in
    your own community. </p>
    <p>
    With Artistrun.Space, you can see in the calendar for all of those shared
    resources and reclaim the empty spots.</p>`
  },
  {
    title: 'Streams: Group collaborations',
    imageUrl:
      'https://s3.eu-central-1.amazonaws.com/skogen-reading-materials/landing-page/nodal-group.jpg',
    description: `<p>When an individual sparks an idea that is yet to be articulated
    to become a more concrete activity, Streams feature comes in to
    the place. </p>
    <p> With Streams, one can initiate a co-creation and
    others who are also intrigued by the idea can join the
    conversation and eventually they can cocreate an event, an
    activity to take place.</p>`
  },
  {
    title: 'Chats feature',
    imageUrl:
      'https://s3.eu-central-1.amazonaws.com/skogen-reading-materials/landing-page/nodal-communication.png',
    description: `<p>For any of the above mentioned features, users can chat specific
    to the topic (booking, study-group, public-activity or
    maintenance), on the same page they are, without having to leave
    the page...</p>`
  },
  {
    title: 'Shared documents',
    imageUrl:
      'https://images.unsplash.com/photo-1457694587812-e8bf29a43845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    description: `<p>For all the documents specific to instances (study groups,
      public activities etc.), Artistrun.Space enables a common storage and easy
      access with upload/download features.</p>`
  },
  {
    title: 'Memberships',
    imageUrl:
      'https://s3.eu-central-1.amazonaws.com/skogen-reading-materials/landing-page/nodal-members.jpg',
    description: `<p>With Artistrun.Space, you can manage the memberships within your
    organisation, either it is based on paid memberships, or just
    pure love.</p>`
  },
  {
    title: 'Maintenance management (soon!)',
    imageUrl:
      'https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    description: `<p>Members can create posts indicating a required task to be done
    regarding the facilities/machines/rooms that are shared. This
    way, keeping up the resources shared ready to use become easier
    to manage. Anyone can create a need, anyone can subscribe to do
    it and confirm being done.</p>`
  },
  {
    title: 'Portfolio pages (soon!)',
    imageUrl:
      'https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    description: `<p>Since most users of Artistrun.Space are artists who have a need to display their work and basic info such as contact details, 
    we want to build it for you to make it easier to manage your online portfolio. Soon we're releasing our portfolio feature so that artists
    can display their works with ease.</p>`
  },
  {
    title: 'Want to try?',
    description: `<p>
    We are currently working on making it easy for organisations
    to adopt this.
  </p>
  <p>
    Meanwhile, if you want to use Artistrun.Space software please get in
    touch with us: 
    <a href="mailto:emin@infinitesimals.space?subject=We're interested in Artistrun.Space">
      Send an email
    </a>
  </p>`
  }
];

export { intro, sections };
