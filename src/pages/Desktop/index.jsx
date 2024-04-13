import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Input, Text, Heading } from "../../components";
import DesktopFeaturecards from "../../components/DesktopFeaturecards";
import DesktopFooters from "../../components/DesktopFooters";
import DesktopNavbardesktop from "../../components/DesktopNavbardesktop";
import DesktopTag from "../../components/DesktopTag";


export default function DesktopPage() {
  
  return (
    <>
      <Helmet>
        <title>Hubnex2Project</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black-900_01 pb-[15px]">
        <div className="flex flex-col items-center ">
        <div className="w-[]">
              
            </div>
          <header className="flex items-center justify-center self-stretch bg-gradient p-[11px] ">
            <div className="flex gap-2 self-end sm:flex-col sm:items-center ">
              <Text as="p" className="self-end !text-black-900_01">
                This page is included in a free SaaS Website Kit.
              </Text>
              <div className="flex items-center gap-1 self-start ">
                <Text as="p" className="!text-black-900_01 sm:640px flex justify-center sm:text-center ">
                  View the complete Kit
                </Text>
                
                <Img src="images/img_icons.svg" alt="icons_one" className="h-[16px] w-[16px] self-start" />
              </div>
            </div>
          </header>
          <div className="self-stretch">
            <DesktopNavbardesktop className="flex items-center justify-between gap-5 p-[15px]" />
            <div className="relative md:flex md:flex-col md:p-5">
              <div className="relative h-[753px] self-end">
                <div className="absolute bottom-10 left-0 right-0 top-0 m-auto h-45 w-full">
                  <div className="h-[730px] bg-gradient1" />
                  <Img
                    src="images/Ellipse 2.png"
                    alt="image"
                    className="relative mt-[-192px] h-[240px] w-full object-cover md:auto  md:h-auto md:w-full md:mt-0  max-h-[240px] sm:max-width-full md:max-h-auto"
                  />
        </div>
        <div className="absolute left-0 right-0 top-[4%] m-auto flex w-full max-w-[947px] items-start md:relative md:flex-col md:p-5">
          <div className="flex flex-1 items-center md:flex-col md:self-stretch">
            <div className="relative z-[2] mb-[129px] h-[203px] w-[24%] self-end md:w-full mt-0">
            <Img
                src="images/img_cursor_1.png"
                alt="cursortwo_one"
                className="absolute bottom-0 left-43% right-0 top-0 m-auto h-[200px] w-[200px] object-cover md:hidden"
              />

              <Img
                src="images/img_cursor_2.png"
                alt="cursortwo_one"
                className="absolute bottom-0 left-43% right-0 top-0 [43%]m-auto left-1/2 transform -translate-x-1/2 h-[200px] w-[200px] object-cover md:bottom-0 md:left-0"
              />
            </div>
            <div className="relative ml-[-58px] flex flex-1 flex-col items-center gap-8 md:ml-0 md:self-stretch">
              <DesktopTag className="flex items-center rounded-[10px] border border-solid border-gray-900 px-[13px]" />
              <Heading size="md" as="h1" className="text-center leading-[125px] tracking-[-12.38px] md:leading-normal md:tracking-normal ">
                <>
                  One Task
                  <br />
                  at a Time
                </>
              </Heading>
              <Text
                size="lg"
                as="p"
                className="w-[71%] text-center leading-[31px] tracking-[-0.79px] md:w-full"
              >
                Celebrate the joy of accomplishment with an app designed to track your progress, motivate your
                efforts, and celebrate your successes.
              </Text>
              
            </div>
          </div>

        </div>
        <Img
          src="images/img_message_1.png"
          alt="messageone_one"
          className="absolute right-[12%] top-[11%] m-auto h-[200px] w-[200px] object-cover"
        />
      </div>
      </div><Button size="sm" shape="round" className="min-w-[125px] font-medium tracking-[-0.32px]">
                Get for free
              </Button>
        </div>


          <div className="flex justify-center self-stretch p-5">
            <div className="mb-[23px] flex w-[88%] flex-col items-center gap-9 md:w-full">
              <Text as="p" className="!text-gray-600_01">
                Trusted by the world’s most innovative teams
              </Text>
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
               
                <Img
                  src="images/img_acme_1.png"
                  alt="acmeone_one"
                  className="h-[32px] w-[14%]  max-height-[32px] w-1/7 object-cover md:h-full  sm:flex flex-row "
                />
                
               
                <Img
                  src="images/img_quantum_1.png"
                  alt="quantumone_one"
                  className="h-[32px] w-[12%] object-cover md:h-full sm:flex flex-row"
                />
               
                <Img
                  src="images/img_echo_1.png"
                  alt="echoone_one"
                  className="h-[28px] w-[16%] object-cover md:h-full max-height-[32px] w-1/8 sm:flex flex-row "
                />
                <Img
                  src="images/img_celestia_1.png"
                  alt="celestiaone_one"
                  className="h-[28px] w-[11%] object-cover md:h-full sm:flex flex-row"
                />
                <Img
                  src="images/img_pulse_1.png"
                  alt="pulseone_one"
                  className="h-[22px] w-[10%] object-cover md:h-full sm:flex flex-row "
                />
                <Img src="images/img_apex_1.png" alt="apexone_one" className="h-[27px] w-[8%] object-cover md:w-full max-height-[27px] md:h-full sm:will-change-auto" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[120px] flex w-full max-w-[1112px] flex-col items-center gap-[66px] md:p-5 sm:gap-[33px]">
            <div className="flex w-[49%] flex-col items-center gap-[11px] md:w-full">
              <Heading size="s" as="h2" className="text-center tracking-[-3.24px]">
                Everything you need
              </Heading>
              <Text size="lg" as="p" className="text-center leading-[31px] tracking-[-0.79px]">
                Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get
                reminders, and see your progress simply and quickly.
              </Text>
            </div>
            <div className="flex gap-4 self-stretch md:flex-col">
              <DesktopFeaturecards className="flex w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-solid border-white-A700_33 bg-black-900 p-5" />
              <DesktopFeaturecards
                integration="Goal setting and tracking"
                body="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
                className="flex w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-solid border-white-A700_33 bg-black-900 p-5"
              />
              <DesktopFeaturecards
                integration="Secure data encryption"
                body="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
                className="flex w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-solid border-white-A700_33 bg-black-900 p-5"
              />
            </div>
          </div>
          <div className="mt-[120px] flex self-stretch p-[46px] md:p-5">
            <div className="mx-auto mb-[22px] mt-10 flex w-full max-w-[1092px] flex-col items-center gap-[60px] sm:gap-[30px]">
              <div className="flex w-[49%] flex-col items-center gap-[17px] md:w-full">
                <Heading size="s" as="h2" className="text-center tracking-[-3.24px]">
                  Intuitive interface
                </Heading>
                <Text size="lg" as="p" className="text-center leading-[31px] tracking-[-0.79px]">
                  Celebrate the joy of accomplishment with an app designed to track your progress, motivate your
                  efforts, and celebrate your successes, one task at a time.
                </Text>
              </div>
              <Img
                src="images/img_app_night.png"
                alt="appnight_one"
                className="h-[678px] w-full object-cover md:h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[37px] self-stretch px-14 py-[76px] md:p-5">
            <Heading size="s" as="h2" className="text-center tracking-[-3.24px]">
              Frequently asked questions
            </Heading>
            <div className="mb-[107px] w-[62%] md:w-full">
              <div className="flex justify-between gap-5 border-b border-solid border-white-A700_33 py-7 sm:py-5">
                <Heading as="h3" className="self-end tracking-[-0.56px]">
                  How does the pricing work for teams
                </Heading>
                <Img src="images/img_frame.svg" alt="image_one" className="h-[24px] w-[24px]" />
              </div>
              <div className="flex justify-between gap-5 border-b border-solid border-white-A700_33 py-7 sm:py-5">
                <Heading as="h4" className="self-end tracking-[-0.56px]">
                  How does the pricing work for teams
                </Heading>
                <Img src="images/img_frame.svg" alt="image_two" className="h-[24px] w-[24px]" />
              </div>
              <div className="flex justify-between gap-5 border-b border-solid border-white-A700_33 py-7 sm:py-5">
                <Heading as="h5" className="self-end tracking-[-0.56px]">
                  How does the pricing work for teams
                </Heading>
                <Img src="images/img_frame.svg" alt="image_three" className="h-[24px] w-[24px]" />
              </div>
              <div className="flex justify-between gap-5 border-b border-solid border-white-A700_33 py-7 sm:py-5">
                <Heading as="h6" className="self-end tracking-[-0.56px]">
                  How does the pricing work for teams
                </Heading>
                <Img src="images/img_frame.svg" alt="image_four" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
          <footer className="self-stretch">
            <div className="pb-[15px]">
              <div className="flex items-start justify-center gap-[18px] p-2.5 md:flex-col">
                <Img
                  src="images/img_emojistar_1.png"
                  alt="image_five"
                  className="h-[263px] w-[263px] object-cover md:w-full"
                />
                <div className="flex flex-1 flex-col items-center gap-10 md:self-stretch">
                  <div className="flex flex-col items-center gap-[15px] self-stretch px-[46px] md:px-5">
                    <Heading size="s" as="h1" className="text-center tracking-[-3.24px]">
                      Get instant access
                    </Heading>
                    <Text size="md" as="p" className="text-center leading-[23px] tracking-[-0.16px] !text-gray-400">
                      Celebrate the joy of accomplishment with an app designed to track your progress and motivate your
                      efforts.
                    </Text>
                  </div>
                  <div className="flex w-[76%] items-center gap-2.5 md:w-full sm:flex-col">
                    <Input shape="round" type="email" name="email" placeholder={`name@email.com`} className="sm:pr-5" />
                    <Button size="xs" shape="round" className="min-w-[113px] font-medium tracking-[-0.32px]">
                      Get access
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_helix2_1.png"
                  alt="helix2one_one"
                  className="mb-[33px] mt-[150px] h-[268px] w-[268px] object-cover md:w-full"
                />
              </div>
            </div>
            <DesktopFooters className="flex items-center justify-between gap-5 border-t border-solid border-white-A700_33 p-5 sm:flex-col" />
          </footer>
        </div>
      </div>
    </>
  );
}
