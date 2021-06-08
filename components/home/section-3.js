import styles from "../../styles/home/section3.module.scss";
import "../../styles/home/youtubevideo.module.scss";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Section3(props) {
    const img1 = {
        width: "100%",
        backgroundImage: `url('./carBackground.jpg')`,
        height: "130vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        paddingTop: "1px",
        marginTop: "-1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    }
  return (
      <div  className={styles.wr}>
    <div className={styles.wrapper} id="section-3">
      <div className={styles.mTitle}>Our Blogs</div>
      <div className={styles.content}>
          <div className={styles.left}>
              <YoutubeEmbed embedId="ba7JNTI17uo" />
          </div>
          <div className={styles.right}>
              <div className={styles.title}>
                  Car Trade Dubai
              </div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet commodi dolore earum eum facere fugit id inventore ipsa iusto labore, nemo odio qui quia quisquam quo vel veritatis voluptas. Adipisci assumenda atque beatae eaque earum eius eveniet minus quis sequi? Ab accusantium ad alias aliquam amet blanditiis commodi corporis cum cumque cupiditate error expedita explicabo facilis ipsam ipsum iure, magnam maxime minima mollitia placeat porro possimus quia quis quod repellat rerum saepe tempora ut voluptate voluptatum. Consectetur distinctio dolor dolorem eius eos facilis maiores nemo perferendis quia repudiandae. Adipisci aperiam blanditiis dicta eveniet, exercitationem ipsam iusto laboriosam odio sit.
              </div>
          </div>
      </div>
    </div>
      </div>
  );
}
