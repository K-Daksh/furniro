import React from "react";
import PhotoAlbum from "react-photo-album";

const ImageCollage = () => {
  const photos = [
    {
      src: "https://s3-alpha-sig.figma.com/img/9954/4b25/1da1dc5c1c4cd5091a6369784c3b3366?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d~dH3w0Tu-g9Nm0dse0JCA2J4iiPyuhcdece9xxXwX6B1jDy7NnWDIfYpNv4fvSYepRk5ruRlZi32zTb53fI-8Mgad7JVu39tv1n3THBK~hzKfbYoQ9aeKfFp2GobsQJR2CDlKBWQvl8EjscJM1H-GPfd3NDV5psq8sB9MWacCNgDNSv269lTuYVR6f0nCJJH~cHQ9hOZfu~52LdV9Xy11EBEr6enbjoBuwNFeIeoPViM4TqZNTHySW3SpdTgVpIblHuBoq-g8zoNfkhrcd0CcS2fESoIGf37zvNhsepafwAoHGlu0pHEvwVookoFj6sp0gqbPfMgKNikdXvWd8qmw__",
      width: 900,
      height: 700,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/e8ee/1dc9/413c23f2d7371be94a52ea9020db45cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PTPtTQBKPe0vA8c-JeYSDlgvffuFFuIflL5gQuu3CpAm9K07u65tTTYwBg76V7kPbM0zI1wRWyP3C0jtFabYtCyAy3CD~oiwnREvNgQ5L4Ff1oQqvBaSwvrNW1dGJcnWDk6uRID00fPnbNPNg12c6WGmjBdcby872hJZwXPXXvaQkGGw-8KGwk48rNykN7bDqDwnvb9miRq8LOiN38F6ldxOtiJ0~OnK-fxxLxiRR6rnKfknGcgGlby4ddTRORnrzImWI7lW9VlmUjpioDinjrO2VzYkL2b~OZO5IaIMKLn6-fjGPsWpn4L4cmSuidixH-9ZzD7rpPvRQewvqd-G7w__",
      width: 800,
      height: 600,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/a4bb/2814/2f4aae4edaceced4645de9ad49216504?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JEPyOZVxFRwh5KIhMX5Fr1xuKgHMFhounz1ZikuYVy8JhgYDfCJRMSIl8PnyFG2XVTvVpGBCcKbDdkCApXDGS5RhfmtrY2pDI-jl4J6O0eFYrPrV9IzUocHS8rfI9Hdxtb0j8QBEYAvk08fpRcnjfytSJYyfnAw8Tgtt3zPCmxg9nkd71yUztQtTqt3KckDb1JRB2skGTvB-WV323bUgrdjF4mhLQFSwXh2ljijFR-Ct213vyhPNFPxoHl9lcSzbruO8jt7QEaUKl8d-vjhCZEAxWlo3MwGfS5nAnaUWCF0E-X9gu-QMuoIuf7xOKaAT6MdOkFfZt0dRzvYieXQ3Ww__",
      width: 800,
      height: 600,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/057c/3bab/f9de6c6ff643cd2e7661215ad26aed46?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IX-Ns-i3cZjjVAe1PwCoCvI3gV-JUy6YrgqkKog~72wF~hqBJ5V7QPM3V~ryJV53RzEXa2~c22LW2HHH6yYh3uPbWeRYVZpryD2dwkjyPfXeVTIEvvKo8gpgkjiOcJSxrxzhgfnCtSfBwok8kVWqk5q1YLuniRO3~rzg~ok7JTudS0rryQHbVVkxXUazQWwkxdQc4dklsfmwS6dauj8EOPF2u-NMnWrzYiFZZJ7Crzq~7KknSpI-rRDLE7g5XRhtQVHEAwZuVMxywo7vJDeCgXoQtRVOlRmMb2B6zd8zJJeBGzKpAOcK-xNp2Z1A9lZH402RIZozVLUKndSnKmACjA__",
      width: 800,
      height: 600,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/b167/0f90/40560e3b59b4fd3c2538107c6fa70736?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W9yIBdRgf50XIdZHIeiTvK6aa5j3CEjLugabjksI8RsY9rwwP71AQlpDU~vB~hF5wPwTZ75mW1macjlkrWFiwfEZ54Q~gXSRZFX99lCS04HGWwAq4HT2p1otWYTaxaQ7ssXZQqMasOHedMtoIXDfbSxSMGtABWRaD6SSaWWKRO1~dTZdQwiv54v45NrYKWiTM~mInDBcuq5v7A4xYC1Sa4NRc7ZpBg5DqfJtdXINn~h5C9DNMzxuLDuESbDXVbI9ufTubN-g27GPJU2v1Q8m9Z6g5MewYOsCYILe5U371AT9Rv6E1mcq23UIr5OJeM4ePOUNkHPAsxnS56-w3XM9tg__",
      width: 800,
      height: 600,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/9532/f812/360b02673b349021a24f23d4184b4e15?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rS6LzdSzhRwItK7P7X5ihUK4FXFKu9~HTevywhPX7NwL0zNTEzVu8IYQgNdDNyeiEkL6dyTywJbhZQt9Cno6477FAblDlkts6HWWLSG9YmR~Y~kMDFtzjvQ9Y8~VYticKyiEwhPtZlXI1FohLeckLBhCPvZ2Fbf9sTfSCTqhu-oVat~MZ8B-CMlw~TCKX0TS6ZBRP0C4RSi6-AgYIQRpceVf5m2~fu2Yw1Fn-oR3pu09lT9vUVByaaK9ZaiL5u9T4im4Z6GSAXwzD0V-ajphYOzxvjfQErgwbXFT0aL6a5jJMXxgDK1W0bRldcL5kMxNoIu33HUpxn4~n4RoGZ7EHw__",
      width: 800,
      height: 600,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/394a/75bc/77d8a98d7cff3b010ba29ad5b60844d7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kan52BRq-V7wdiGmsADyAuycaY3EOwqNXgETHZUZG2DZuvm~XCkgr1He8VPRWDAy-yHfLqn32Pm7hXqpO8AHiIANx4-P-eyqtYFGNWNW3DUxt~sJuly6Gcf3fdTgJ9L2E4FYRhCDuFAkodtyjCszNWtn~hZ9QbNoKbIGhXfr2D8Zk~B-clWNhEXQg7F1e5f11P87lwWorN17~O3SltP6qa33fiR74M8znGf7wqK3S7Efy1G6B5eNInWqQlllvW1a6GNWf~5De3nEcGA98cYCIYvY0YPc2fFgEc4OU7OwNljJd2S4k2GBV55qq-Wo47LEP2830pGA-ZUTgXIoyYChUg__",
      width: 800,
      height: 600,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jYkXYOA5gKlLbz-6Ptr3YMD0FCF8oHj7BYpAfaCqoD7LpiQ7dP64GH0DJdlWV7XvaujbLsrvsjy3zP~~yTTpR~uVJ-sy~e4Za-F6mm1jihNPxCH2Iuz9N7ypy79rTpRQs-SIlGd3iKlU501E9nCpmw5x3rnXJHlbJE9SHbsIcFiMsDGhalvGD~piOqY7xfhKUN-HpM2qqGTtPxPJt5Xolk6SOG~i1nvRUo13I9eBIGlCfCOVYVqqwLoOAXQbnWvEg2jxrxNCn5fw82QZLR0M4ajkBtFNJ6hZ6y4lnXHXU70k9pu9TIm3xt5R-f6F51sjezRd0OJcls8oVyFLZt8aQw__",
      width: 800,
      height: 600,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/6b7d/b8c4/94f946a8fffd305fbd1dafe75395cc6f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WGu9bT6epAS1WmGIVyhrTpBTesZFeum9PcoAkS4BflPYysAbUlpvO7R8PdQ8VqXgRYtLS6tHdJrRM8S2BBs~eebK1irOExhEHXf8DNwrOk7ALC1AEDa18t5-IJOXtG4XY97kJ1NG1yImAboi8BuKsWMhHLEDjb32UPIvCaWjSGm7H9qYtiuLc5e1p7lppsfp1x5U1v31J~jwtTbExFXgfEqanvhGpSSQyRemaTOu8wIoYZcPSa8uLYQJ~GqgYarz0tKdOanfzrvObAKhGV0EIYg3p70nfLZV3K0uCeVWCpI-zz58yoh~2-MpY4QEpmONvGLFD7FAm2IOBWudgb4Kww__",
      width: 800,
      height: 600,
    },
  ];

  return (
    <div className="relative bg-white py-8 h-screen w-full overflow-hidden">
      {/* Title & Hashtag */}
      <div className="text-center mb-12">
        <h2 className="text-xl text-gray-600 mb-2">Share your setup with</h2>
        <h1 className="text-3xl md:text-4xl font-bold">#FuniroFurniture</h1>
      </div>
      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 h-full w-auto">
        <div
          className="absolute h-full flex flex-row justify-center items-center gap-5 transform scale-[80%] right-1/2"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0.9)",
          }}
        >
          <div className="flex flex-col gap-5">
            <div className="h-1/2 flex flex-row items-end gap-5">
              <div
                className="h-[382px] w-[274px]"
                style={{
                  backgroundImage: `url(${photos[0].src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="h-[312px] w-[451px]"
                style={{
                  backgroundImage: `url(${photos[1].src})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="h-1/2 flex flex-row items-start gap-5">
              <div
                className="h-[323px] w-[381px]"
                style={{
                  backgroundImage: `url(${photos[2].src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="h-[242px] w-[344px]"
                style={{
                  backgroundImage: `url(${photos[3].src})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col justify-center h-screen">
            <div
              className="h-[392px] w-[295px]"
              style={{
                backgroundImage: `url(${photos[4].src})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-3/4 flex flex-row items-end gap-5">
              <div
                className="h-[348px] w-[290px]"
                style={{
                  backgroundImage: `url(${photos[5].src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="h-[425px] w-[433px]"
                style={{
                  backgroundImage: `url(${photos[7].src})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="h-1/4 flex flex-row items-start gap-5">
              <div
                className="h-[242px] w-[178px]"
                style={{
                  backgroundImage: `url(${photos[6].src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="h-[192px] w-[258px]"
                style={{
                  backgroundImage: `url(${photos[8].src})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
