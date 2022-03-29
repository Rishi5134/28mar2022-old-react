import React from 'react'
import Socials from './Socials'
import QuickLinks from './QuickLinks'
import Help from './Help'
import ContactInfo from './ContactInfo'
import SidenavAdv from './SidenavAdv'

const Advantages = () => {
  return (
    <>

      <div className="d-flex adv-main">

        <div className="col-lg-3 mt-4 sidenav sideNavStyle2">

          <nav className="collapse show navbar navbar-vertical " id="navbar-vertical">
            <div className="navbar-nav text-center mx-auto mt-2">

              <h4 className="m-0">CATEGORIES</h4>
              <hr className="mx-3 bg-danger" />
              <div className="overflow-auto sideNavStyle3">
                <SidenavAdv className='' />
              </div>
            </div>
          </nav>
        </div>

        <div className="vl"></div>

        <div className="w-100 advantages-head-main ">
          <div className="d-flex flex-column mx-3 ">
            <div className='d-flex align-items-center text-center'>
              <h2 className=" mt-3 text-center w-100">ADVANTAGES</h2>
            </div>

            <hr />
            <div className="d-flex w-100 advantages-data-main">

              <ul className="advantages-data">
                <li className="advantage-list">
                  <h4 className="title-advantage">Wealth & Prosperity</h4>
                  <p className="text-dark">
                    They say money can't buy happiness... But in PyraVastu terms, the meaning of
                    wealth & prosperity has far wider implications. Using Pyramids can help to bring
                    abundance into your life & provide yourself with the kind of enrichment that
                    will bring true happiness.
                    <br/>
                    <div className="text-danger">

                      Tools to explore: <br />
                      Prosperity kit , MAX , Wish Pyramid and many other.
                    </div>
                  </p>
                </li>
                <li className="advantage-list">
                  <h4 className="title-advantage">Marriage & Love</h4>
                  <p className="text-dark">
                    Whether you've always been 'unlucky in love', are having problems attracting a mate. Pyramids can help you to enrich your love, harmony and marriage life.
                    <br />
                    <div className="text-danger">

                      Tools to explore: <br />
                      Marriage Pyramid, Pyron - Love, Harmony Pyramid and many more.
                    </div>
                  </p>
                </li>
                <li className="advantage-list">
                  <h4 className="title-advantage">Family & Peace</h4>
                  <p className="text-dark">
                    Did you know you should start your PyraVastu before you even move in a new house, it starts of the land itself. As family is very important part in our lives proper attention must be given.
                    <br />
                    <div className="text-danger">
                      Tools to explore: <br />
                      Vastu Sleep, Peace & Meditation seat, Harmony Pyramid and many more.
                    </div>
                  </p>
                </li>
                <li className="advantage-list">
                  <h4 className="title-advantage">Money & Fortune</h4>
                  <p className="text-dark">
                    Here's your chance to invite good fortune and to attract more money at your shop, office or factory with Pyramid power.
                    <br />
                    <div className="text-danger">
                      Tools to explore: <br />
                      Fortune seat, Prosperity kit, PyraCards, Pyron - Wealth, Swastik Gold and many more.
                    </div>
                  </p>
                </li>
                <li className="advantage-list">
                  <h4 className="title-advantage">Education & Children</h4>
                  <p className="text-dark">
                    Can Pyramids help in education. Yes, it can improve the concentration and also health and vitality of children.
                    <br />
                    <div className="text-danger">
                      Tools to explore: <br />
                      Education Pyramid, PyraCard - Energy & Vitality, Pyron for Children and many other.
                    </div>
                  </p>
                </li>
                <li className="advantage-list">
                  <h4 className="title-advantage">Health & Pain-relief</h4>
                  <p className="text-dark">
                    To be healthy is not to be only disease free! By using Pyramid power in our lives we can improve our health, in terms of illness at all three levels - body, mind and soul.
                    <br />
                    <div className="text-danger">
                      Tools to explore: <br />
                      Multi-energy belt range, Health 9x9 kit, StressPad, Slim-x and Backache kit and many other.
                    </div>
                  </p>
                </li>
                <li className="advantage-list">
                  <h4 className="title-advantage">Career & Workplace</h4>
                  <p className="text-dark">
                    If you feel stuck in a rut at work, overlooked for promotion and want a total change of career or a business, Pyramids can help you to improves your sales, money flow or job opportunity.
                    <br />
                    <div className="text-danger">
                      Tools to explore: <br />
                      PyraCard - Business & Career, Pyron - Career, Wish Pyramid and other inside.
                    </div>
                  </p>
                </li>
                <li className="advantage-list">
                  <h4 className="title-advantage">Good-luck & Wellness</h4>
                  <p className="text-dark">
                    Pyramids can enhance luck and can be used for personal benefit or that of home, shops and offices.
                    <br />
                    <div className="text-danger">
                      Tools to explore: <br />
                      Prosperity kit, PyraCards - Luck Fortune, Energy 9x9, Fortune Plate and many more.
                    </div>
                  </p>
                </li>
                <li className="advantage-list">
                  <h4 className="title-advantage">Protection & Purification</h4>
                  <p className="text-dark">
                    It is very important to protect your main door from all evil energies. Pyramids can be used in cars for safety. <br />
                    Purifying the negative energy inside the rooms with fire is also necessary.
                    <br />
                    <div className="text-danger">
                      Tools to explore: <br />
                      PyraFire, Protect 9x9 for door and car and many more.
                    </div>
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='container d-flex justify-content-around res_col footer_blocks '>
        <QuickLinks />
        <Help />
        <Socials/>
        <ContactInfo />
      </div>
    </>

  )
}

export default Advantages