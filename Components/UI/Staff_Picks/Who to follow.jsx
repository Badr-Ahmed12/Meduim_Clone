import FollowCard from "./FollowCard";

export default function Who_to_follow() {
  return (
    <div>
        <section>
        <h2 className="font-semibold text-base mb-4">Who to follow</h2>
        <div className="space-y-3">
          <FollowCard
            name="Karsten Biedermann"
            description="I really love building stuff. ❤️"
          />
          <FollowCard
            name="Realworld AI Use Cases"
            description="I wanted to have a publication"
          />
        </div>
      </section>
    </div>
  );
}