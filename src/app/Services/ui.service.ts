import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';
import { Subject } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { ScreenLoaderComponent } from '../Components/Shared/spinner/screen-loader/screen-loader.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private spinnerTopRef: OverlayRef;

  spin$: Subject<number> = new Subject();

  constructor(private overlay: Overlay) {
    this.spinnerTopRef = this.cdkSpinnerCreate();
    this.spin$
      .asObservable()
      .pipe(
        scan((acc: number, next: number) => {
            if (!next) {
              return 0;
            }
            return (acc + next) >= 0 ? acc + next : 0;
          }
        ),
        map(val => val > 0)
      )
      .subscribe(
        (res) => {
          console.log('hassass:', this.spinnerTopRef.hasAttached());

          if (res) {
            return this.showSpinner()
          } else if (this.spinnerTopRef.hasAttached()) {
            return this.stopSpinner();
          }
        }
      )

  }

  private cdkSpinnerCreate(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  showSpinner(): void {
    this.spinnerTopRef.attach(new ComponentPortal(ScreenLoaderComponent));
  }

  stopSpinner(): void {
    this.spinnerTopRef.detach();
  }

  show(): void {
    this.spin$.next(1);
  }

  hide(): void {
    this.spin$.next(-1);
  }

  reset(): void {
    this.spin$.next(0);
  }
}
