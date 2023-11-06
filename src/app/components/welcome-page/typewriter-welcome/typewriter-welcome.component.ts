import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { interval, takeUntil, take, Subject } from 'rxjs';

@Component({
  selector: 'app-typewriter-welcome',
  templateUrl: './typewriter-welcome.component.html',
  styleUrls: ['./typewriter-welcome.component.scss']
})
export class TypewriterWelcomeComponent implements OnInit, OnDestroy {
  currentTextToShow: string = '';
  textToShow: string = `Hey, it's me, Anton!`;
  interval$ = interval(200);
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.startTextAnimation();
  }

  startTextAnimation() {
    if (this.textToShow) {
      this.interval$
        .pipe(
          takeUntil(this.destroy$),
          take(this.textToShow.length)
        )
        .subscribe(() => {
          this.currentTextToShow += this.textToShow.charAt(this.currentTextToShow.length);
          if (this.currentTextToShow.length === this.textToShow.length) {
            setTimeout(() => {
              this.currentTextToShow = '';
              this.startTextAnimation();
            }, 2000);
          }
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
