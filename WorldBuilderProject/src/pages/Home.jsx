import LineBreak from "../components/LineBreak";

function Home() {
  return (
    <>
      <p className="display-5 text-center">
        <strong>This is a test</strong>
      </p>
      <p className="display-3 text-center">
        <strong>Reality Gods</strong>
      </p>
      <p className="text-md-start">
        <strong>Order</strong>
        <LineBreak lines={2} />
        &emsp;Order is the creator of all structure, from the nothing, it molds
        the world into shape and form. To him, everything has it's purpose and
        it is designed to do so.
        <LineBreak lines={2} />
        &emsp;Worshippers of Order are often the engineers, scientists,
        <LineBreak lines={2} />
        &emsp;Order will often choose to manifest himself as a ..... Something
        involving a coat and a coffee mug.
        <LineBreak lines={3} />
        <strong>Spirit</strong>
        <LineBreak lines={2} />
        &emsp;Spirit is a part of every living thing, and every living thing is
        a part of Spirit. (like the holy spirit)
        <LineBreak lines={2} />
        &emsp;Worshippers of Spirit tend to be those who seek freedom
        <LineBreak lines={2} />
        &emsp;As a manifestation, Spirit takes on the form of a hippie from the
        60s (you don't get it yet, but your kids are going to love it) and he
        wants to go by "Soul" now,
        <LineBreak lines={3} />
        <strong>End</strong>
        <LineBreak lines={2} />
        &emsp;End is, as the name implies, the end of all things. Just as order
        commands the void to take form from the void, End takes all form and
        returns it to the void.
        <LineBreak lines={2} />
        &emsp;As the god of the Void, most people who worship her directly are
        cultists trying to enact some end of all things plot. More often than
        not, worship of End comes from worhip of her God-kin.
        <LineBreak lines={2} />
        &emsp;The manifestation of End is simply a silhouette of a general
        figure. They are unable to manifest any more than what they are, which
        is the return to the void, simply emptiness. Though they can manifest,
        they rarely choose to do so.
        <LineBreak lines={3} />
      </p>
      <p className="display-3 text-center">
        <strong>Fundamental Gods</strong>
      </p>
      <div className="container">
        <div className="row">
          <div className="col column">
            <ul className="mb-3">
              <li>Truth - Orinigated from Order</li>
              <li>Power - Originated from Order</li>
              <li>Arcane - Originated from Order</li>
            </ul>
          </div>
          <div className="col column">
            <ul>
              <li>Freedom - Originated from Soul</li>
              <li>Conflict - Orignated from Soul</li>
              <li>Faith - Originated from Soul</li>
            </ul>
          </div>
          <div className="col column">
            <ul>
              <li>Death - Orignated from End</li>
              <li>Change - Orignated from End</li>
              <li>Destruction - Originated from End</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="display-3 text-center">
        <strong>Ideal Gods</strong>
      </p>
      <ul>
        <li>Democracy - Freedom + Change</li>
        <li>Religion - </li>
        <li>Justice</li>
        <li>Destruction</li>
      </ul>
    </>
  );
}

export default Home;
